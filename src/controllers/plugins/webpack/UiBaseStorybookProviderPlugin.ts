import { Compiler } from 'webpack'
import { ComponentType } from '@theme/types/ComponentType'
import UiBaseProviderPlugin, {
  UiBaseProviderOptionCriteria
} from '@src/controllers/plugins/webpack/UiBaseProviderPlugin'
import StorybookProvider from '@src/controllers/storybook/StorybookProvider'
import StorybookEjsRenderer from '@src/controllers/storybook/StorybookEjsRenderer'
import ProvidedFsFileRepository from '@src/repositories/ProvidedFsFileRepository'

export type UiBaseStorybookPluginOption = UiBaseProviderOptionCriteria & {
  importPath: string
  pathToProvide: string
  type: ComponentType
}

export default class UiBaseStorybookProviderPlugin extends UiBaseProviderPlugin {
  private readonly options: UiBaseStorybookPluginOption
  private initialize: boolean
  constructor(options: UiBaseStorybookPluginOption) {
    super(options)
    this.options = options
    this.initialize = false
  }
  apply(compiler: Compiler): void {
    const provider = new StorybookProvider(
      this.options.pathToProvide,
      this.options.type,
      new StorybookEjsRenderer(this.options.type, this.options.importPath),
      new ProvidedFsFileRepository()
    )
    compiler.hooks.emit.tapAsync(
      'create files',
      async (compilation, callback) => {
        compilation.fileDependencies.add(this.options.configPath)
        const changedFiles = this.changedFiles(compilation)
        if (changedFiles.includes(this.options.configPath)) {
          // Do some
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
