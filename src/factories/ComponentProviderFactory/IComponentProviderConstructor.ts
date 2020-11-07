import IComponentProvider from './IComponentProvider'
import ITemplateFactory from '@factory/TemplateFactory/ITemplateFactory'
import IProvidedFileRepository from '@src/repositories/IProvidedFileRepository'
import { RouterName } from '@factory/ComponentProviderFactory/vue/VueComponentProvider'
interface IComponentProviderConstructor {
  new (
    pathToProvide: string,
    templateFactory: ITemplateFactory,
    router: RouterName,
    repository: IProvidedFileRepository
  ): IComponentProvider
}
export default IComponentProviderConstructor
