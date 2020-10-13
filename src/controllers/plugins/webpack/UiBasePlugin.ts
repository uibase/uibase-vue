import webpack, { Compiler } from 'webpack'
import { ComponentProviderFactory } from '@factory/ComponentProviderFactory/index'
import fs from 'fs'
import ThemeConfig from '@uiConfig/ThemeConfig'
import { RenderedFilePath } from '@theme/types/RenderedFilePath'
import Compilation = webpack.compilation.Compilation
import IComponentProvider from '@factory/ComponentProviderFactory/IComponentProvider'

export type UiBasePluginOption = {
  pathToProvide: string
  configPath: string
}

export default class UiBasePlugin {
  private readonly options: UiBasePluginOption
  private prevTimestamps: Map<any, any>
  private readonly startTime: number
  private initialize: boolean
  constructor(options: UiBasePluginOption) {
    this.options = options
    this.startTime = Date.now()
    this.prevTimestamps = new Map()
    this.initialize = false
  }
  apply(compiler: Compiler) {
    const providerFactory = new ComponentProviderFactory(
      this.options.pathToProvide
    )
    const vueProvider = providerFactory.create('vue')
    console.log('create Vue Provider.', vueProvider)
    compiler.hooks.emit.tapAsync(
      'create files',
      async (compilation, callback) => {
        compilation.fileDependencies.add(this.options.configPath)
        const changedFiles = this.changedFiles(compilation)
        this.prevTimestamps = compilation.fileTimestamps
        if (changedFiles.includes(this.options.configPath)) {
          this.compile(vueProvider, callback, compilation)
        } else {
          if (!this.initialize) {
            this.compile(vueProvider, callback, compilation)
            this.initialize = true
          } else {
            callback()
          }
        }
      }
    )

    compiler.hooks.watchClose.tap(
      'ui base plugin delete all files.',
      async (compiler, callback) => {
        console.log('die yaboo!!!!!!!!-----------')
        callback()
      }
    )
  }

  private changedFiles(compilation: Compilation): string[] {
    return Array.from(compilation.fileTimestamps.keys()).filter((watchfile) => {
      return (
        (this.prevTimestamps.get(watchfile) || this.startTime) <
        (compilation.fileTimestamps.get(watchfile) || Infinity)
      )
    })
  }

  private compile(
    provider: IComponentProvider,
    callback: () => void,
    compilation: Compilation
  ) {
    const configContent = fs.readFileSync(this.options.configPath, {
      encoding: 'utf-8'
    })
    const config = eval(configContent) as ThemeConfig
    provider.provide(config).then((paths: RenderedFilePath[]) => {
      console.log('Component Created', paths)
      paths.forEach((path) => compilation.fileDependencies.add(path))
      callback()
    })
  }
}
