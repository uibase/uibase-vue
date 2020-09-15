import IThemeComponent from './IThemeComponent'
import ThemeColors from '../types/configations/ThemeColors'

export const defaultConfig: ThemeColors = {
  deepRed: '#D9072D',
  redLight: '#fff9f8',
  white: '#fff',
  black: '#140F0F',
  deepBlue: '#0F4C81',
  brightGreen: '#38CC8E',
  brightYellow: '#ffe18d',
  link: '#509fd2',
  primaryVariant: '#69fcbb',
  primary: '$brightGreen',
  secondary: '$deepBlue',
  error: '$deepRed',
  notification: '$deepRed',
  baseFont: '$black'
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
      baseFont,
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
    $baseFont:${baseFont};
    `
  }
}
