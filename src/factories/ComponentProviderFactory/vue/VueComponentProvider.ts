import IComponentProvider from '../IComponentProvider'
import { RenderedFilePath } from '@theme/types/RenderedFilePath'
import { findConfigDiff } from '@factory/ComponentProviderFactory/helper/index'
import IProvidedFileRepository from '@src/repositories/IProvidedFileRepository'
import { TemplateList } from '@theme/types/TemplateList'
import ITemplateFactory from '@factory/TemplateFactory/ITemplateFactory'
import ProvideVueTemplatesInteractor from '@src/vue/ProvideVueTemplatesInteractor'
import { RenderVuePluginImporter } from '@factory/ComponentProviderFactory/helper/RenderVuePluginImporter'
import pluginImportTemplate from './index.js.ejs'
import templateProvideRepositoryHandler from '@helper/templateProvideRepositoryHandler'
import UserConfig from '@theme/types/UserConfig'
import ComponentObject from '@theme/config/ComponentObject'

export default class VueComponentProvider implements IComponentProvider {
  private readonly pathToProvide: string
  private previousConfig: UserConfig
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
    this.previousConfig = {} as UserConfig
    this.renderedPaths = []
  }

  async provide(userConfig: UserConfig): Promise<RenderedFilePath[]> {
    const [newComponents, deletedComponents] = findConfigDiff(
      userConfig,
      this.previousConfig
    )

    // take all components if set global
    const targetComponents = Object.keys(newComponents).includes('global')
      ? userConfig
      : newComponents
    const changedVueTemplateList = this.templateFactory.generate(
      new ComponentObject({ ...targetComponents, global: userConfig.global }),
      'vue'
    )
    const deletedVueTemplateList = this.templateFactory.generate(
      new ComponentObject({ ...deletedComponents, global: userConfig.global }),
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

    this.previousConfig = { ...userConfig }

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
