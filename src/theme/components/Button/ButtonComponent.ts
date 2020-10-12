import IThemeComponent from '@theme/components/IThemeComponent'
import Button, { ButtonColors } from '@uiConfig/Button'
import defaultConfig from '@theme/components/Button/defaultConfig'

export default class ButtonComponent implements IThemeComponent<string> {
  config: Button
  prefix = 'button'
  constructor(config: Button = defaultConfig) {
    this.config = config
  }
  generate(): Promise<string> {
    const str = `
    @mixin buttonConfig() {
      .${this.prefix} {
        border-radius: ${this.config.radius}px;
        ${this.generateColorStr({ colors: this.config.colors })}
      }
    }
    `
    return Promise.resolve(str)
  }
  private generateColorStr(btnColors: ButtonColors): string {
    const str = Object.keys(btnColors.colors).reduce((_str, key) => {
      const { hover } = btnColors.colors[key]
      const { background: hvBg, fontColor: hvCl, opacity: hvOp } = hover
      const borderColorProperty = (() => {
        if (typeof btnColors.colors[key].background === 'string') {
          return btnColors.colors[key].background
        } else {
          return (btnColors.colors[key].background as { color: string }).color
        }
      })()
      return (_str += `
        &.${key} {
          color: ${btnColors.colors[key].fontColor};
          background-color: ${btnColors.colors[key].background};
          &:hover {
            color: ${hvCl};
            background-color: ${hvBg};
            opacity: ${hvOp};
          }
        }
        &.${key}Border {
          color: ${borderColorProperty};
          background: #fff;
          border: ${this.config.bordered.width}px solid ${borderColorProperty};
        }
        `)
    }, '')
    return str
  }
}
