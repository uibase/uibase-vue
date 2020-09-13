import IThemeComponent from './IThemeComponent'
import ThemeColors from '../types/configations/ThemeColors'

export const defaultConfig: ThemeColors = {
  brightRed: '#FF6F61',
  pastelRed: '#FF7D7D',
  darkRed: '#512B2B',
  deepRed: '#D9072D',
  redLight: '#fff9f8',
  white: '#fff',
  grayLight: '#F1F1F1',
  black: '#140F0F',
  blackLight: '#333',
  grayUltraLight: '#f8f8f8',
  blackTrans50: '#898787',
  blackTrans40: '#a19f9f',
  blackTrans30: '#B9B7B7',
  blackTrans10: '#E7E7E7',
  deepBlue: '#0F4C81',
  brightGreen: '#38CC8E',
  brightYellow: '#ffe18d',
  link: '#509fd2',
  primaryVariant: '$pastelRed',
  primary: '$brightRed',
  secondary: '$deepBlue',
  error: '$deepRed',
  notification: '$deepRed'
}

export default class ThemeColorComponent implements IThemeComponent {
  private themeColor: ThemeColors

  constructor(themeColor: ThemeColors = defaultConfig) {
    this.themeColor = { ...defaultConfig, ...themeColor }
  }

  generate(): string {
    //
    const {
      primary,
      secondary,
      error,
      notification,
      ...otherColors
    } = this.themeColor
    return `
    ${Object.keys(otherColors).reduce(
      (str, key) => (str += `$${key}:${otherColors[key]};`),
      ''
    )}
    $primary:${primary};
    $secondary:${secondary};
    $error:${error};
    $notification:${notification};
    `
  }
}
