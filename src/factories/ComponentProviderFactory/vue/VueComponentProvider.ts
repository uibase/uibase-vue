import ejs from 'ejs'
import path from 'path'
import IComponentProvider from '../IComponentProvider'
import ThemeConfig from '@uiConfig/ThemeConfig'
import { RenderedFilePath } from '@theme/types/RenderedFilePath'
import {
  componentNamePath,
  findConfigDiff
} from '@factory/ComponentProviderFactory/helper/index'
import IProvidedFileRepository from '@src/repositories/IProvidedFileRepository'
import { TemplateList } from '@theme/types/TemplateList'
import { ComponentTypeName } from '@theme/types/ComponentTypeName'
import ITemplateFactory from '@factory/TemplateFactory/ITemplateFactory'
import UBConfig from '@theme/config/UBConfig'
import { ThemeComponent } from '@theme/types/ThemeComponent'
import ProvideVueTemplatesInteractor from '@src/vue/ProvideVueTemplatesInteractor'
import { RenderVuePluginImporter } from '@factory/ComponentProviderFactory/helper/RenderVuePluginImporter'

export default class VueComponentProvider implements IComponentProvider {
  private readonly pathToProvide: string
  private readonly previousConfig: ThemeConfig
  private templateFactory: ITemplateFactory
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
      new UBConfig(targetComponents),
      'vue'
    )
    const deletedVueTemplateList = this.templateFactory.generate(
      new UBConfig(deletedComponents),
      'vue'
    )

    const interactor = new ProvideVueTemplatesInteractor(
      this.pathToProvide,
      this.repository,
      changedVueTemplateList
    )

    const renderedPaths = await interactor.handle()

    // 削除処理
    await this.deleteComponentFile(deletedVueTemplateList)

    await this.renderPluginImporter(renderedPaths)

    return renderedPaths
  }

  private async deleteComponentFile(
    targetTemplateList: TemplateList
  ): Promise<boolean> {
    const promises: Promise<boolean>[] = []
    Object.keys(targetTemplateList).forEach((componentName) => {
      promises.push(
        (targetTemplateList[
          componentName as ComponentTypeName
        ] as ThemeComponent)
          .generate()
          .then((templateComponents) => {
            templateComponents.forEach((templateComponent) => {
              const [dirName, fileName] = templateComponent.fileName
              const dir = path.resolve(
                this.pathToProvide,
                `/${dirName ? dirName + '/' : ''}`
              )
              this.repository.remove(dir, fileName)
            })
            return true
          })
      )
    })
    return Promise.all(promises).then(() => true)
  }

  private async renderPluginImporter(
    renderedFilePaths: RenderedFilePath[]
  ): Promise<boolean> {
    const dir = path.resolve(__dirname, './index.ejs')
    const importer = new RenderVuePluginImporter()
    const str = await importer.render(dir, renderedFilePaths)
    this.repository.add(this.pathToProvide, 'index.js', str)
    return true
  }
}
