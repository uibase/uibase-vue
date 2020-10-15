import IComponentProvider from '../IComponentProvider'
import ThemeConfig from '@uiConfig/ThemeConfig'
import { RenderedFilePath } from '@theme/types/RenderedFilePath'
import { findConfigDiff } from '@factory/ComponentProviderFactory/helper/index'
import IProvidedFileRepository from '@src/repositories/IProvidedFileRepository'
import { TemplateList } from '@theme/types/TemplateList'
import ITemplateFactory from '@factory/TemplateFactory/ITemplateFactory'
import UBConfig from '@theme/config/UBConfig'
import ProvideVueTemplatesInteractor from '@src/vue/ProvideVueTemplatesInteractor'
import { RenderVuePluginImporter } from '@factory/ComponentProviderFactory/helper/RenderVuePluginImporter'
import pluginImportTemplate from './index.js.ejs'
import templateProvideRepositoryHandler from '@helper/templateProvideRepositoryHandler'

export default class VueComponentProvider implements IComponentProvider {
  private readonly pathToProvide: string
  private previousConfig: ThemeConfig
  private templateFactory: ITemplateFactory
  private renderedPaths: RenderedFilePath[]
  private readonly repository: IProvidedFileRepository

  constructor(
    pathToProvide: string,
    templateFactory: ITemplateFactory,
    repository: IProvidedFileRepository
  ) {
    this.pathToProvide = pathToProvide
    this.templateFactory = templateFactory
    this.repository = repository
    this.previousConfig = {} as ThemeConfig
    this.renderedPaths = []
  }

  async provide(themeConfig: ThemeConfig): Promise<RenderedFilePath[]> {
    const [newComponents, deletedComponents] = findConfigDiff(
      themeConfig,
      this.previousConfig
    )

    // take all components if set global
    const targetComponents = Object.keys(newComponents).includes('global')
      ? themeConfig
      : newComponents
    const changedVueTemplateList = this.templateFactory.generate(
      new UBConfig({ ...targetComponents, global: themeConfig.global }),
      'vue'
    )
    const deletedVueTemplateList = this.templateFactory.generate(
      new UBConfig({ ...deletedComponents, global: themeConfig.global }),
      'vue'
    )

    const interactor = new ProvideVueTemplatesInteractor(
      this.pathToProvide,
      this.repository,
      changedVueTemplateList
    )

    const renderedPaths = await interactor.handle()

    const deletedPaths = await this.deleteComponentFile(deletedVueTemplateList)

    this.renderedPaths = [...this.renderedPaths, ...renderedPaths]
    this.renderedPaths = this.renderedPaths.filter(
      (renderedPath) => !deletedPaths.includes(renderedPath)
    )
    this.renderedPaths = Array.from(new Set(this.renderedPaths))
    console.log(this.renderedPaths)
    await this.renderPluginImporter(this.renderedPaths)

    this.previousConfig = { ...themeConfig }

    return this.renderedPaths
  }

  private async deleteComponentFile(
    targetTemplateList: TemplateList
  ): Promise<RenderedFilePath[]> {
    return templateProvideRepositoryHandler(
      this.pathToProvide,
      targetTemplateList,
      this.repository,
      'remove'
    )
  }

  private async renderPluginImporter(
    renderedFilePaths: RenderedFilePath[]
  ): Promise<boolean> {
    const importer = new RenderVuePluginImporter()
    const str = await importer.render(pluginImportTemplate, renderedFilePaths)
    this.repository.add(this.pathToProvide, 'index.js', str)
    return true
  }
}
