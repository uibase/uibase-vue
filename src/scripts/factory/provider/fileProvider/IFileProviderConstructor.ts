import IProvider from '../IProvider'
import BaseUiTheme from '../../../../theme'
interface IFileProviderConstructor {
  new (baseUi: BaseUiTheme, pathToProvide: string): IProvider
}
export default IFileProviderConstructor
