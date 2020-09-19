import IProvider from '../IProvider'
import IFactory from '../../IFactory'
import FileNameType from './FileNameType'
import BaseUiTheme from '../../../../theme'
import IFileProviderConstructor from './IFileProviderConstructor'
import ComponentFileProvider from './ComponentFileProvider'
import IconFileProvider from './IconFileProvider'
import StyleguideFileProvider from './StyleguideFileProvider'

export default class FileProviderFactory
  implements IFactory<IProvider, FileNameType> {
  private readonly pathToProvide: string
  private readonly baseUi: BaseUiTheme
  constructor(baseUi: BaseUiTheme, pathToProvide: string) {
    this.baseUi = baseUi
    this.pathToProvide = pathToProvide
  }
  create(name: FileNameType = 'component'): IProvider {
    switch (name) {
      case 'component':
        return this.createProvider(ComponentFileProvider)
      case 'icons':
        return this.createProvider(IconFileProvider)
      case 'styleguide':
        return this.createProvider(StyleguideFileProvider)
      default:
        return this.createProvider(ComponentFileProvider)
    }
  }
  private createProvider(prov: IFileProviderConstructor): IProvider {
    return new prov(this.baseUi, this.pathToProvide)
  }
}
