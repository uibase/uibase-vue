import IComponentProvider from '@factory/ComponentProviderFactory/IComponentProvider'
import IComponentProviderFactory from '@factory/ComponentProviderFactory/IComponentProviderFactory'
import IComponentProviderConstructor from './IComponentProviderConstructor'
import VueComponentProvider, { RouterName } from './vue/VueComponentProvider'
import TemplateFactory from '@factory/TemplateFactory/TemplateFactory'
import ProvidedFsFileRepository from '@src/repositories/ProvidedFsFileRepository'
import { ComponentType } from '@theme/types/ComponentType'

export default class ComponentProviderFactory
  implements IComponentProviderFactory<IComponentProvider> {
  private readonly pathToProvide: string
  private readonly router: RouterName

  /**
   * Provide Component Files
   * @param pathToProvide
   * @param router
   */
  constructor(pathToProvide: string, router: RouterName) {
    this.router = router
    this.pathToProvide = pathToProvide
  }
  create(name: ComponentType): IComponentProvider {
    switch (name) {
      case 'vue':
        return this.createProvider(VueComponentProvider)
      default:
        throw `FileTypeName Error: ${name} is not defined`
    }
  }
  private createProvider(
    prov: IComponentProviderConstructor
  ): IComponentProvider {
    return new prov(
      this.pathToProvide,
      new TemplateFactory(),
      this.router,
      new ProvidedFsFileRepository()
    )
  }
}
