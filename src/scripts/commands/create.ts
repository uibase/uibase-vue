import { Command } from 'commander'
import { resolve } from 'path'
import * as fs from 'fs'
import ThemeConfig from '../../theme/types/configations/ThemeConfig'
import BaseUiTheme from '../../theme'
import ICommand from './ICommand'
import FileProviderFactory from '../factory/provider/fileProvider/FileProviderFactory'

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
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const themeConfig = require(workingDirConfigFilePath) as ThemeConfig
        const defaultConfig = BaseUiTheme.getDefaultConfig()
        const config = BaseUiTheme.mergeConfig(defaultConfig, themeConfig)
        const baseUi = new BaseUiTheme(config)
        const factory = new FileProviderFactory(baseUi, outputFromWorkingDir)
        const componentFileProvider = factory.create('component')
        const iconFileProvider = factory.create('icons')
        const styleguideFileProvider = factory.create('styleguide')
        // provide
        componentFileProvider.provide()
        iconFileProvider.provide()
        styleguideFileProvider.provide()
      })
  }
}
