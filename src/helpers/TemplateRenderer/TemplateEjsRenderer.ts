import { ConfigProperties } from '@uiConfig/ConfigProperties'
import { isConfig } from '@uiConfig/isConfig'
import ejs from 'ejs'
import ITemplateRenderer from '@theme/helpers/ITemplateRenderer'
import IStyleManager from '@theme/helpers/IStyleManager'
import { BackgroundProperties } from '@uiConfig/common/Background'
import { ShadowProperties } from '@uiConfig/common/Shadow'
import {
  FontColorProperties,
  FontSizeProperties,
  FontWeightProperties
} from '@uiConfig/common/Font'
import { OpacityProperties } from '@uiConfig/common/Opacity'
import { WidthProperties } from '@uiConfig/common/Width'
import { HeightProperties } from '@uiConfig/common/Height'
import { BorderProperties } from '@uiConfig/common/Border'
import { RadiusProperties } from '@uiConfig/common/Radius'

export default class TemplateEjsRenderer implements ITemplateRenderer {
  private readonly options: {
    async: boolean
    context: {
      [key: string]: any
    }
  }

  constructor(styleManager: IStyleManager<string>) {
    this.options = {
      context: {
        style: (config: ConfigProperties) => styleManager.generate(config),
        background: (config: BackgroundProperties) =>
          styleManager.background(config),
        shadow: (config: ShadowProperties) => styleManager.shadow(config),
        fontSize: (config: FontSizeProperties) => styleManager.fontSize(config),
        fontColor: (config: FontColorProperties) =>
          styleManager.fontColor(config),
        fontWeight: (config: FontWeightProperties) =>
          styleManager.fontWeight(config),
        opacity: (config: OpacityProperties) => styleManager.opacity(config),
        width: (config: WidthProperties) => styleManager.width(config),
        height: (config: HeightProperties) => styleManager.height(config),
        radius: (config: RadiusProperties) => styleManager.radius(config),
        border: (config: BorderProperties) => styleManager.border(config),
        // for render helper
        /**
         * find default value and return key
         * @param props
         * @return key {string | undefined} key of default value.
         */
        findDefault: (props: { [key: string]: any }): string | undefined =>
          Object.keys(props).find(
            (propName) => props[propName].default === true
          ),
        /**
         * create enum string like 'primary', 'secondary', 'third'
         * @param props
         * @return enum string {string | undefined} enum string.
         */
        enumString: (props: { [key: string]: any }): string =>
          Object.keys(props)
            .map((propName) => `'${propName}'`)
            .join(',')
      },
      async: true
    }
  }

  render(templateFilePath: string, config: isConfig): Promise<string> {
    return ejs.render(templateFilePath, config, this.options) as Promise<string>
  }
}
