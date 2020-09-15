import IThemeComponent from './IThemeComponent'
import Box from '../types/configations/Box'

export const defaultConfig: Box = {
  radius: 4
}

export default class BoxComponent implements IThemeComponent {
  private config: Box
  constructor(config: Box = defaultConfig) {
    this.config = config
  }

  generate(): string {
    return `
$boxBorderRadius: 4px;
$footerBorder: 1px solid #333;
    `
  }
}
