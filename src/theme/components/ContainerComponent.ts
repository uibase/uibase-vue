import IThemeComponent from './IThemeComponent'
import Container from '../types/configations/Container'

export const defaultConfig: Container = {
  headerColor: '$white',
  headerBgColor: '$blackLight',
  footerBgColor: '$white'
}

export default class ContainerComponent implements IThemeComponent {
  private containerConfig: Container
  constructor(containerConfig: Container = defaultConfig) {
    this.containerConfig = { ...defaultConfig, ...containerConfig }
  }
  generate(): string {
    return `
$containerHeaderColor: $white;
$containerHeaderBackgroundColor: $blackLight;
$containerFooterBackgroundColor: $white;
    `
  }
}
