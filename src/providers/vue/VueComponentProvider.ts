import IComponentProvider from '../IComponentProvider'
import { RenderedFilePath } from '@theme/types/RenderedFilePath'
import { findConfigDiff } from '@src/providers/helper'
import IProvidedFileRepository from '@src/repositories/IProvidedFileRepository'
import { TemplateList } from '@theme/types/TemplateList'
import ProvideVueTemplatesInteractor from '@src/vue/ProvideVueTemplatesInteractor'
import { RenderVuePluginImporter } from './RenderVuePluginImporter'
import pluginImportTemplate from './index.js.ejs'
import templateProvideRepositoryHandler from '@helper/templateProvideRepositoryHandler'
import UserConfig from '@theme/types/UserConfig'
import ComponentObject from '@theme/config/ComponentObject'
import TemplateVueFactory from '@src/providers/vue/TemplateVueFactory'

export type RouterName = 'nuxt-link' | 'router-link' | 'a'

export default class VueComponentProvider implements IComponentProvider {
  private readonly pathToProvide: string
  private previousConfig: UserConfig
  private renderedPaths: RenderedFilePath[]
  private readonly repository: IProvidedFileRepository
  private readonly router: RouterName

  constructor(
    pathToProvide: string,
    router: RouterName,
    repository: IProvidedFileRepository
  ) {
    this.router = router
    this.pathToProvide = pathToProvide
    this.repository = repository
    this.previousConfig = {} as UserConfig
    this.renderedPaths = []
  }

  async provide(userConfig: UserConfig): Promise<RenderedFilePath[]> {
    const [newComponents, deletedComponents] = findConfigDiff(
      userConfig,
      this.previousConfig
    )

    const factory = new TemplateVueFactory(this.router)

    // take all components if set global
    const targetComponents = Object.keys(newComponents).includes('global')
      ? userConfig
      : newComponents
    const changedVueTemplateList = factory.generate(
      new ComponentObject({
        ...targetComponents,
        global: userConfig.global
      })
    )
    const deletedVueTemplateList = factory.generate(
      new ComponentObject({
        ...deletedComponents,
        global: userConfig.global
      })
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
    await this.renderPluginImporter(this.renderedPaths, this.router)

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
    renderedFilePaths: RenderedFilePath[],
    router: RouterName
  ): Promise<boolean> {
    const importer = new RenderVuePluginImporter(router)
    const str = await importer.render(pluginImportTemplate, renderedFilePaths)
    this.repository.add(this.pathToProvide, 'index.js', str)
    return true
  }
}
