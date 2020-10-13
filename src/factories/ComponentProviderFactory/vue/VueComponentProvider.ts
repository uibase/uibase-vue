import path from 'path'
import IComponentProvider from '../IComponentProvider'
import ThemeConfig from '@uiConfig/ThemeConfig'
import { RenderedFilePath } from '@theme/types/RenderedFilePath'
import { findConfigDiff } from '@factory/ComponentProviderFactory/helper/index'
import IProvidedFileRepository from '@src/repositories/IProvidedFileRepository'
import { TemplateList } from '@theme/types/TemplateList'
import { ComponentTypeName } from '@theme/types/ComponentTypeName'
import ITemplateFactory from '@factory/TemplateFactory/ITemplateFactory'
import UBConfig from '@theme/config/UBConfig'
import { ThemeComponent } from '@theme/types/ThemeComponent'
import ProvideVueTemplatesInteractor from '@src/vue/ProvideVueTemplatesInteractor'
import { RenderVuePluginImporter } from '@factory/ComponentProviderFactory/helper/RenderVuePluginImporter'
import pluginImportTemplate from './index.js.ejs'

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

    // 削除処理
    const deletedPaths = await this.deleteComponentFile(deletedVueTemplateList)

    // パスマネージメントが必要
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
    const promises: Promise<RenderedFilePath[]>[] = []
    Object.keys(targetTemplateList).forEach((componentName) => {
      promises.push(
        (targetTemplateList[
          componentName as ComponentTypeName
        ] as ThemeComponent)
          .generate()
          .then((templateComponents) => {
            const paths: RenderedFilePath[] = []
            templateComponents.forEach((templateComponent) => {
              const [dirName, fileName] = templateComponent.fileName
              const dir = path.join(
                this.pathToProvide,
                `/${dirName ? dirName + '/' : ''}`
              )
              this.repository.remove(dir, fileName)
              paths.push(path.resolve(dir, fileName))
            })
            return paths
          })
      )
    })
    return Promise.all(promises).then((deletedPathGroups) => {
      const paths: RenderedFilePath[] = []
      deletedPathGroups.forEach((pathGroup) =>
        pathGroup.forEach((p) => paths.push(p))
      )
      return paths
    })
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
