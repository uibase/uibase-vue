import IThemeComponent from './IThemeComponent'
import Box from '../types/configations/Box'

export const defaultConfig: Box = {
  radius: 5,
  styles: {
    white: {
      background: '$white',
      border: false,
      footerDivide: false,
      shadow: '0px 1px 4px rgba(0,0,0,0.2)',
      color: '$baseFont'
    },
    black: {
      background: '$black',
      color: '$white',
      border: false,
      shadow: false,
      footerDivide: '1px solid #fff'
    }
  }
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
