import IThemeComponent from '@theme/components/IThemeComponent'
import Container from '@uiConfig/Container'

export const defaultConfig: Container = {
  header: {
    background: '#333',
    fontColor: '$white'
  },
  footer: {
    background: '#333'
  }
}

export default class ContainerComponent implements IThemeComponent<string> {
  private config: Container
  constructor(config: Container) {
    this.config = config
  }
  generate(): Promise<string> {
    const str = `
$containerHeaderColor: $white;
$containerHeaderBackgroundColor: #333;
$containerFooterBackgroundColor: $white;
    `
    return Promise.resolve(str)
  }
}
