import { Compiler } from 'webpack'
import { ComponentType } from '@theme/types/ComponentType'
import UiBaseProviderPlugin from '@src/controllers/plugins/webpack/UiBaseProviderPlugin'
import { RouterName } from '@src/providers/vue/VueComponentProvider'
import IComponentProvider from '@src/providers/IComponentProvider'
import VueComponentProvider from '@src/providers/vue/VueComponentProvider'
import ProvidedFsFileRepository from '@src/repositories/ProvidedFsFileRepository'

export type UiBasePluginOption = {
  configPath: string
  router: RouterName
  pathToProvide: string
  type: ComponentType
}

export default class UiBaseTemplateProviderPlugin extends UiBaseProviderPlugin {
  private readonly options: UiBasePluginOption
  private initialize: boolean
  constructor(options: UiBasePluginOption) {
    super(options)
    this.options = options
    this.initialize = false
  }
  apply(compiler: Compiler): void {
    const provider = this.getProvider(this.options.type)
    compiler.hooks.emit.tapAsync(
      'create files',
      async (compilation, callback) => {
        compilation.fileDependencies.add(this.options.configPath)
        const changedFiles = this.changedFiles(compilation)
        if (changedFiles.includes(this.options.configPath)) {
          this.compile(provider, callback, compilation)
        } else {
          if (!this.initialize) {
            this.compile(provider, callback, compilation)
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
        // TODO:: clear .uiBase folder.
        callback()
      }
    )
  }

  getProvider(type: ComponentType): IComponentProvider {
    const repository = new ProvidedFsFileRepository()
    switch (type) {
      case 'vue':
        return new VueComponentProvider(
          this.options.pathToProvide,
          this.options.router,
          repository
        )
      default:
        throw `sorry. ${type} is not support yet.`
    }
  }
}
