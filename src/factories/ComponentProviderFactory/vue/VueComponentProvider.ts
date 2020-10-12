import path from 'path'
import IComponentProvider from '../IComponentProvider'
import ThemeConfig from '@uiConfig/ThemeConfig'
import { RenderedFilePath } from '@theme/types/RenderedFilePath'
import { findConfigDiff } from '@factory/ComponentProviderFactory/helper'
import ProvideVueTemplatesInteractor from 'src/vue/ProvideVueTemplatesInteractor'
import IProvidedFileRepository from '@src/repositories/IProvidedFileRepository'
import { TemplateList } from '@theme/types/TemplateList'
import { ComponentTypeName } from '@theme/types/ComponentTypeName'
import ITemplateFactory from '@factory/TemplateFactory/ITemplateFactory'
import UBConfig from '@theme/config/UBConfig'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier')

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

    return renderedPaths
  }

  private async deleteComponentFile(
    targetTemplateList: TemplateList
  ): Promise<boolean> {
    const promises: Promise<boolean>[] = []
    Object.keys(targetTemplateList).forEach((componentName) => {
      promises.push(
        targetTemplateList[componentName as ComponentTypeName]
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
  // private createVuePluginFile(componentTypeName: ComponentTypeName) {}

  // provide(themeConfig: ThemeConfig, onlyDiff: boolean): Promise<boolean> {
  //   // stylesheet path
  //   const stylePath = resolve(this.pathToProvide, 'uibase.theme.scss')
  //   const iconPath = resolve(this.pathToProvide, 'icons.js')
  //   // component path
  //   const componentPaths: { [propName: string]: [string, string] } = {
  //     button: ['Button', 'index.vue']
  //   }
  //   const themeCssString = prettier.format(this.baseUi.createStyles(), {
  //     parser: 'scss'
  //   })
  //   const iconJsString = prettier.format(this.baseUi.create('icons'), {
  //     parser: 'babel'
  //   })
  //   // componentFiles
  //   return new Promise((promiseResolve) => {
  //     // create stylesheet file
  //     fs.mkdirSync(this.pathToProvide, { recursive: true })
  //     fs.writeFileSync(stylePath, themeCssString)
  //     fs.writeFileSync(iconPath, iconJsString)
  //
  //     // create component file
  //     const promises = Object.keys(componentPaths).map(
  //       (componentName: string) => {
  //         return this.baseUi
  //           .create(componentName as ComponentName)
  //           .then((fileString) => {
  //             const [dist, fileName] = componentPaths[componentName]
  //             const componentPath = resolve(this.pathToProvide, dist)
  //             const componentFilePath = resolve(componentPath, fileName)
  //             fs.mkdirSync(componentPath, { recursive: true })
  //             fs.writeFileSync(componentFilePath, fileString)
  //             return Promise.resolve(true)
  //           })
  //       }
  //     )
  //
  //     // return promise
  //     return Promise.all(promises).then(() => promiseResolve(true))
  //   })
  // }
}
