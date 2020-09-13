import IThemeComponent from './IThemeComponent'
import Button, { ButtonColors } from './types/configations/Button'

export const defaultConfig: Button = {
  colors: {
    primary: {
      background: '$primary',
      color: '$white'
    },
    secondary: {
      background: '$secondary',
      color: '$white'
    }
  },
  radius: 3
}

export default class ButtonComponent implements IThemeComponent {
  buttonConfig: Button
  prefix = 'button'
  constructor(buttonConfig: Button) {
    this.buttonConfig = { ...defaultConfig, ...buttonConfig }
  }
  generate(): string {
    return `
    @mixin buttonConfig() {
      .${this.prefix} {
        border-radius: ${this.buttonConfig.radius}px;
      }
      ${this.generateColorStr(this.buttonConfig.colors)}
    }
    `
  }
  private generateColorStr(colors: ButtonColors): string {
    const str = Object.keys(colors).reduce(
      (_str, key) =>
        (_str += `.${key} { \n
      color: ${colors[key].color}; \n
      background-color: ${colors[key].background} \n
    }\n`),
      ''
    )
    return str
  }
}
