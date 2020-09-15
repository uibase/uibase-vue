import IThemeComponent from './IThemeComponent'
import Container from '../types/configations/Container'

export const defaultConfig: Container = {
  headerColor: '$white',
  headerBgColor: '#333',
  footerBgColor: '$white'
}

export default class ContainerComponent implements IThemeComponent {
  private config: Container
  constructor(config: Container) {
    this.config = config
  }
  generate(): string {
    return `
$containerHeaderColor: $white;
$containerHeaderBackgroundColor: #333;
$containerFooterBackgroundColor: $white;
    `
  }
}
