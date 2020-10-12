import path from 'path'
import IProvideTemplates from 'src/useCases/IProvideTemplates'
import IProvidedFileRepository from 'src/repositories/IProvidedFileRepository'
import { TemplateList } from '@theme/types/TemplateList'
import { ComponentTypeName } from '@theme/types/ComponentTypeName'
import { RenderedFilePath } from '@theme/types/RenderedFilePath'
import { ThemeComponent } from '@theme/types/ThemeComponent'

export default class ProvideVueTemplatesInteractor
  implements IProvideTemplates {
  private repository: IProvidedFileRepository
  private templates: TemplateList
  private readonly pathToProvide: string

  constructor(
    pathToProvide: string,
    repository: IProvidedFileRepository,
    templates: TemplateList
  ) {
    this.pathToProvide = pathToProvide
    this.repository = repository
    this.templates = templates
  }
  handle(): Promise<RenderedFilePath[]> {
    const promises: Promise<RenderedFilePath[]>[] = []
    Object.keys(this.templates).forEach((componentName) => {
      promises.push(
        (this.templates[componentName as ComponentTypeName] as ThemeComponent)
          .generate()
          .then((templateComponents) => {
            const paths: RenderedFilePath[] = []
            templateComponents.forEach((templateComponent) => {
              const [dirName, fileName] = templateComponent.fileName
              const dir = path.resolve(
                this.pathToProvide,
                `/${dirName ? dirName + '/' : ''}`
              )
              this.repository.add(dir, fileName, templateComponent.componentStr)
              paths.push(path.resolve(dir, fileName))
            })
            return paths
          })
      )
    })
    return Promise.all(promises).then((renderedPathGroups) => {
      const paths: RenderedFilePath[] = []
      renderedPathGroups.forEach((pathGroup) =>
        pathGroup.forEach((p) => paths.push(p))
      )
      return paths
    })
  }
}
