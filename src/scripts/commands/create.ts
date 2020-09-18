import { Command } from 'commander'
import { resolve } from 'path'
import * as fs from 'fs'
import ThemeConfig from '../../theme/types/configations/ThemeConfig'
import BaseUiTheme from '../../theme'
import ICommand from './ICommand'
import StyleguideRequire from '../../theme/types/configations/StyleGuideRequire'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier')

export class CreateCommand implements ICommand {
  private readonly workingDir: string
  private program: Command

  constructor(program: Command, workingDir: string) {
    this.workingDir = workingDir
    this.program = program
  }

  handle(): void {
    this.program
      .command('create')
      .option(
        '-c, --config <config>',
        'select config file',
        './uibase.config.js'
      )
      .option(
        '-o, --outputDir <dirctory>',
        'select output directory',
        './uibase'
      )
      .action((options: { config: string; outputDir: string }) => {
        const workingDirConfigFilePath = resolve(
          this.workingDir,
          options.config
        )
        const outputFromWorkingDir = resolve(this.workingDir, options.outputDir)
        const outputFile = resolve(outputFromWorkingDir, 'uibase.theme.scss')
        const outputIconFile = resolve(outputFromWorkingDir, 'icons.js')
        const outputStyleguideRequire = resolve(
          outputFromWorkingDir,
          'styleguide.require.js'
        )
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const themeConfig = require(workingDirConfigFilePath) as ThemeConfig
        const defaultConfig = BaseUiTheme.getDefaultConfig()
        const config = BaseUiTheme.mergeConfig(defaultConfig, themeConfig)
        const baseUi = new BaseUiTheme(config)
        const result = prettier.format(baseUi.createStyles(), {
          parser: 'scss'
        })
        const iconResult = prettier.format(baseUi.create('icons'), {
          parser: 'babel'
        })
        const styleGuideRequireResult = prettier.format(
          baseUi.create('styleguide'),
          {
            parser: 'babel'
          }
        )
        fs.mkdirSync(outputFromWorkingDir, { recursive: true })
        fs.writeFileSync(outputFile, result)
        fs.writeFileSync(outputIconFile, iconResult)
        fs.writeFileSync(outputStyleguideRequire, styleGuideRequireResult)
      })
  }
}
