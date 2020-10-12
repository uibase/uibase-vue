import { Command } from 'commander'
import { resolve } from 'path'
import ThemeConfig from '@uiConfig/ThemeConfig'
import BaseUiTheme from '@theme/index'
import ICommand from '../ICommand'
import { ComponentFileProviderFactory } from '../../../factories/ComponentProviderFactory/index'

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
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const themeConfig = require(workingDirConfigFilePath) as ThemeConfig
        if (typeof themeConfig.icons === 'string') {
          themeConfig.icons = resolve(this.workingDir, themeConfig.icons)
        }
        const defaultConfig = BaseUiTheme.getDefaultConfig()
        const config = BaseUiTheme.mergeConfig(defaultConfig, themeConfig)
        const baseUi = new BaseUiTheme(config)
        const factory = new ComponentFileProviderFactory(
          baseUi,
          outputFromWorkingDir
        )
        const componentFileProvider = factory.create('file')
        // provide
        Promise.all([componentFileProvider.provide()]).then(() => {
          console.log('create command done.')
        })
      })
  }
}
