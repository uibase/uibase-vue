import IProvidedFileRepository from '@src/repositories/IProvidedFileRepository'
import { TemplateList } from '@theme/types/TemplateList'
import { RenderedFilePath } from '@theme/types/RenderedFilePath'
import { ComponentTypeName } from '@theme/types/ComponentTypeName'
import { ThemeComponent } from '@theme/types/ThemeComponent'
import path from 'path'

export default (
  pathToProvide: string,
  templateList: TemplateList,
  repository: IProvidedFileRepository,
  action: 'remove' | 'add'
): Promise<RenderedFilePath[]> => {
  const promises: Promise<RenderedFilePath[]>[] = []
  Object.keys(templateList).forEach((componentName) => {
    promises.push(
      (templateList[componentName as ComponentTypeName] as ThemeComponent)
        .generate()
        .then((templateComponents) => {
          const paths: RenderedFilePath[] = []
          templateComponents.forEach((templateComponent) => {
            const [dirName, fileName] = templateComponent.fileName
            const dir = path.join(
              pathToProvide,
              `/${dirName ? dirName + '/' : ''}`
            )
            if (action === 'add') {
              repository.add(dir, fileName, templateComponent.componentStr)
            } else {
              repository.remove(dir, fileName)
            }
            paths.push(path.resolve(dir, fileName))
          })
          return paths
        })
    )
  })
  return Promise.all(promises).then((pathGroups) => {
    const paths: RenderedFilePath[] = []
    pathGroups.forEach((pathGroup) => pathGroup.forEach((p) => paths.push(p)))
    return paths
  })
}
