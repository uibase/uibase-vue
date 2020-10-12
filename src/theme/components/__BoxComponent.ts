import IThemeComponent from '@theme/components/IThemeComponent'
import Box from '@uiConfig/Box'

export const defaultConfig: Box = {
  radius: 5,
  styles: {
    white: {
      background: '$white',
      shadow: '0px 1px 4px rgba(0,0,0,0.2)',
      fontColor: '$baseFont'
    },
    black: {
      background: '$black',
      fontColor: '$white',
      footerDivide: {
        border: '1px solid #fff'
      }
    }
  }
}

export default class BoxComponent implements IThemeComponent<string> {
  private config: Box
  constructor(config: Box = defaultConfig) {
    this.config = config
  }

  generate(): Promise<string> {
    const str = `
$boxBorderRadius: 4px;
$footerBorder: 1px solid #333;
    `
    return Promise.resolve(str)
  }
}
