import IComponentProvider from './IComponentProvider'
import ITemplateFactory from '@factory/TemplateFactory/ITemplateFactory'
import IProvidedFileRepository from '@src/repositories/IProvidedFileRepository'
interface IComponentProviderConstructor {
  new (
    pathToProvide: string,
    templateFactory: ITemplateFactory,
    repository: IProvidedFileRepository
  ): IComponentProvider
}
export default IComponentProviderConstructor
