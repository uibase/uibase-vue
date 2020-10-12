import IComponentProvider from '@factory/ComponentProviderFactory/IComponentProvider'
import IComponentProviderFactory from '@factory/ComponentProviderFactory/IComponentProviderFactory'
import IComponentProviderConstructor from './IComponentProviderConstructor'
import VueComponentProvider from './vue/VueComponentProvider'
import TemplateFactory from '@factory/TemplateFactory/TemplateFactory'
import ProvidedFsFileRepository from '@src/repositories/ProvidedFsFileRepository'

export default class ComponentProviderFactory
  implements IComponentProviderFactory<IComponentProvider> {
  private readonly pathToProvide: string

  /**
   * Provide Component Files
   * @param pathToProvide
   */
  constructor(pathToProvide: string) {
    this.pathToProvide = pathToProvide
  }
  create(name: 'vue' | 'react'): IComponentProvider {
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
      new ProvidedFsFileRepository()
    )
  }
}
