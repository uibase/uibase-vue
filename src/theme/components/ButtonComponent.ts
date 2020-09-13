import IThemeComponent from './IThemeComponent'
import Button, { ButtonColors } from '../types/configations/Button'

export const defaultConfig: Button = {
  colors: {
    primary: {
      background: '$primary',
      color: '$white',
      hover: {
        background: '$primary',
        color: '$white',
        opacity: '0.8'
      }
    },
    secondary: {
      background: '$secondary',
      color: '$white',
      hover: {
        background: '$secondary',
        color: '$white',
        opacity: '0.8'
      }
    }
  },
  bordered: {
    borderWidth: 2
  },
  radius: 3
}

export default class ButtonComponent implements IThemeComponent {
  buttonConfig: Button
  prefix = 'button'
  constructor(buttonConfig: Button = defaultConfig) {
    this.buttonConfig = { ...defaultConfig, ...buttonConfig }
  }
  generate(): string {
    return `
    @mixin buttonConfig() {
      .${this.prefix} {
        border-radius: ${this.buttonConfig.radius}px;
        ${this.generateColorStr(this.buttonConfig.colors)}
      }
    }
    `
  }
  private generateColorStr(colors: ButtonColors): string {
    const str = Object.keys(colors).reduce((_str, key) => {
      const { hover } = colors[key]
      const { background: hvBg, color: hvCl, ...otherStyles } = hover
      return (_str += `
        &.${key} {
          color: ${colors[key].color};
          background-color: ${colors[key].background};
          &:hover {
            color: ${hvCl};
            background-color: ${hvBg};
            ${Object.keys(otherStyles).reduce(
              (__str, key) => (__str += `${key}:${otherStyles[key]};`),
              ''
            )}
          }
        }
        &.${key}Border {
          color: ${colors[key].background};
          background: #fff;
          border: ${this.buttonConfig.bordered.borderWidth}px solid ${
        colors[key].background
      }
        }
        `)
    }, '')
    return str
  }
}
