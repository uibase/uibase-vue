import { Compiler } from 'webpack'
import { ComponentFileProviderFactory } from '../../factories/ComponentProviderFactory/index'
import ThemeConfig from '@uiConfig/ThemeConfig'
import BaseUiTheme from '@theme/index'
import * as fs from 'fs'
import path from 'path'

export type BaseUiThemePluginOption = {
  pathToProvide: string
  configPath: string
}

export default class BaseUiThemePlugin {
  private readonly options: BaseUiThemePluginOption
  private prevTimestamps: Map<any, any>
  private readonly startTime: number
  constructor(options: BaseUiThemePluginOption) {
    this.options = options
    this.startTime = Date.now()
    this.prevTimestamps = new Map()
  }
  apply(compiler: Compiler) {
    // add config to watching files.
    compiler.hooks.emit.tap('emit', (compilation) => {
      compilation.fileDependencies.add(this.options.configPath)
      compilation.fileDependencies.add(
        path.resolve(this.options.pathToProvide, './uibase.theme.scss')
      )
      // console.log(compilation.fileDependencies)
      const changedFiles = Array.from(compilation.fileTimestamps.keys()).filter(
        (watchfile) => {
          return (
            (this.prevTimestamps.get(watchfile) || this.startTime) <
            (compilation.fileTimestamps.get(watchfile) || Infinity)
          )
        }
      ) as string[]
      this.prevTimestamps = compilation.fileTimestamps

      if (changedFiles.includes(this.options.configPath)) {
        console.log('config file changed', changedFiles, this.options)
        const configContent = fs.readFileSync(this.options.configPath, {
          encoding: 'utf-8'
        })
        const config = eval(configContent) as ThemeConfig
        if (typeof config.icons === 'string') {
          const workDir = process.env.PWD || ''
          config.icons = path.resolve(workDir, config.icons)
        }
        const baseUi = new BaseUiTheme(config)
        const factory = new ComponentFileProviderFactory(
          baseUi,
          this.options.pathToProvide
        )
        const componentFileProvider = factory.create('component')
        const iconFileProvider = factory.create('icons')
        const styleguideFileProvider = factory.create('styleguide')
        componentFileProvider.provide()
        iconFileProvider.provide()
        styleguideFileProvider.provide()
      }
    })
  }
}
