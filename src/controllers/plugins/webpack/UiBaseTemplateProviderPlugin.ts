import { Compiler } from 'webpack'
import { ComponentProviderFactory } from '@factory/ComponentProviderFactory/index'
import { ComponentType } from '@theme/types/ComponentType'
import UiBaseProviderPlugin from '@src/controllers/plugins/webpack/UiBaseProviderPlugin'
import { RouterName } from '@factory/ComponentProviderFactory/vue/VueComponentProvider'

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
    const providerFactory = new ComponentProviderFactory(
      this.options.pathToProvide,
      this.options.router || 'router-link'
    )
    const provider = providerFactory.create(this.options.type)
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
}
