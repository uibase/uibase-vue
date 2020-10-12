import ThemeConfig from '@uiConfig/ThemeConfig'
import { ___ComponentModule } from '@factory/ComponentProviderFactory/ComponentModule'
import { TemplateList } from '@theme/types/TemplateList'
import { ThemeComponent } from '@theme/types/ThemeComponent'

export default class ___ComponentUpdater {
  private targetComponents: (keyof ThemeConfig)[]
  private themeConfig: ThemeConfig
  private readonly templateList: TemplateList

  constructor(
    targetComponents: (keyof ThemeConfig)[],
    themeConfig: ThemeConfig,
    templateList: TemplateList
  ) {
    this.targetComponents = targetComponents
    this.themeConfig = themeConfig
    this.templateList = templateList
  }

  provide(): Promise<___ComponentModule> {
    try {
      const promises = this.targetComponents.map((componentTypeName) =>
        this.createComponent(componentTypeName)
      )
      return Promise.all(promises).then((modules: ___ComponentModule[]) => {
        return modules.reduce(
          (m, module: ___ComponentModule) => ({ ...m, ...module }),
          {}
        ) as ___ComponentModule
      })
    } catch (e) {
      throw e
    }
  }

  private createComponent(
    componentTypeName: keyof ThemeConfig
  ): Promise<___ComponentModule> {
    try {
      const promise = (() => {
        if (
          this.templateList[componentTypeName] !== undefined &&
          this.templateList[componentTypeName]
        ) {
          return (this.templateList[
            componentTypeName
          ] as ThemeComponent).generate()
        } else {
          throw `componentNameError: ${componentTypeName} is not defined`
        }
      })()

      return promise.then((str) => {
        return {
          [componentTypeName]: str
        } as ___ComponentModule
      })
    } catch (e) {
      throw e
    }
  }
}
