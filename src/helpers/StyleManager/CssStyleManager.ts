import { BackgroundProperties } from '@theme/types/commonProps/Background'
import { BorderProperties } from '@theme/types/commonProps/Border'
import {
  FontColorProperties,
  FontSizeProperties,
  FontWeightProperties
} from '@theme/types/commonProps/Font'
import { HeightProperties } from '@theme/types/commonProps/Height'
import { OpacityProperties } from '@theme/types/commonProps/Opacity'
import { RadiusProperties } from '@theme/types/commonProps/Radius'
import { WidthProperties } from '@theme/types/commonProps/Width'
import { ConfigProperties } from '@theme/types/ConfigProperties'
import IStyleManager from '@theme/helpers/IStyleManager'
import { ShadowProperties } from '@theme/types/commonProps/Shadow'
import { MarginProperties } from '@theme/types/commonProps/Margin'

export default class CssStyleManager implements IStyleManager<string> {
  background(config: BackgroundProperties): string {
    if (typeof config === 'string') {
      return `background-color: ${config};\n`
    } else {
      return Object.keys(config).reduce(
        (str, propName) =>
          (str += `background-${propName}: ${
            config[propName as keyof BackgroundProperties]
          };\n`),
        ''
      )
    }
  }

  margin(config: MarginProperties): string {
    if (typeof config === 'string') {
      return `margin: ${config};\n`
    } else {
      return Object.keys(config).reduce(
        (str, propName) =>
          (str += `margin-${propName}: ${
            config[propName as keyof BorderProperties]
          };\n`),
        ''
      )
    }
  }

  border(config: BorderProperties): string {
    if (typeof config === 'string') {
      return `border: ${config};\n`
    } else {
      return Object.keys(config).reduce(
        (str, propName) =>
          (str += `border-${propName}: ${
            config[propName as keyof BorderProperties]
          };\n`),
        ''
      )
    }
  }

  fontColor(config: FontColorProperties): string {
    return `color: ${config};\n`
  }

  fontSize(config: FontSizeProperties): string {
    return `font-size: ${
      typeof config === 'number' ? `${config}px` : config
    };\n`
  }

  height(config: HeightProperties): string {
    return `height: ${typeof config === 'number' ? `${config}px` : config};\n`
  }

  opacity(config: OpacityProperties): string {
    return `opacity: ${config};\n`
  }

  radius(config: RadiusProperties): string {
    return `border-radius: ${
      typeof config === 'number' ? `${config}px` : config
    };\n`
  }

  shadow(config: ShadowProperties): string {
    return `box-shadow: ${config};\n`
  }

  width(config: WidthProperties): string {
    return `width: ${typeof config === 'number' ? `${config}px` : config};\n`
  }

  fontWeight(config: FontWeightProperties): string {
    return `font-weight: ${config};\n`
  }


  generate(styleConfig: ConfigProperties): string {
    let result = ''
    Object.keys(styleConfig).forEach((key) => {
      result += (() => {
        switch (key as keyof ConfigProperties) {
          case 'background':
            return this.background(
              styleConfig['background'] as BackgroundProperties
            )
          case 'border':
            return this.border(styleConfig['border'] as BorderProperties)
          case 'fontColor':
            return this.fontColor(
              styleConfig['fontColor'] as FontColorProperties
            )
          case 'fontSize':
            return this.fontSize(styleConfig['fontSize'] as FontSizeProperties)
          case 'fontWeight':
            return this.fontWeight(
              styleConfig['fontWeight'] as FontWeightProperties
            )
          case 'height':
            return this.height(styleConfig['height'] as HeightProperties)
          case 'opacity':
            return this.opacity(styleConfig.opacity as OpacityProperties)
          case 'radius':
            return this.radius(styleConfig.radius as RadiusProperties)
          case 'shadow':
            return this.shadow(styleConfig.shadow as ShadowProperties)
          case 'width':
            return this.width(styleConfig.width as WidthProperties)
          case 'margin':
            return this.margin(styleConfig.margin as MarginProperties)
          default:
            return ''
          // throw `CSSStyleError:: property ${key} is not defined.`
        }
      })()
    })
    return result
  }
}
