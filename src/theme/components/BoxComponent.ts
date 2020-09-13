import IThemeComponent from './IThemeComponent'
import Box from '../types/configations/Box'

export const defaultConfig: Box = {
  radius: 4
}

export default class BoxComponent implements IThemeComponent {
  private boxConfig: Box
  constructor(boxConfig: Box) {
    this.boxConfig = { ...defaultConfig, ...boxConfig }
  }
  generate(): string {
    return `
$boxBorderRadius: 4px;
    `
  }
}
