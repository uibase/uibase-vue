import { ConfigProperties } from '@theme/types/ConfigProperties'
import ejs from 'ejs'
import ITemplateRenderer from '@theme/helpers/ITemplateRenderer'
import IStyleManager from '@theme/helpers/IStyleManager'
import { BackgroundProperties } from '@theme/types/commonProps/Background'
import { ShadowProperties } from '@theme/types/commonProps/Shadow'
import {
  FontColorProperties,
  FontSizeProperties,
  FontWeightProperties
} from '@theme/types/commonProps/Font'
import { OpacityProperties } from '@theme/types/commonProps/Opacity'
import { WidthProperties } from '@theme/types/commonProps/Width'
import { HeightProperties } from '@theme/types/commonProps/Height'
import { BorderProperties } from '@theme/types/commonProps/Border'
import { RadiusProperties } from '@theme/types/commonProps/Radius'
import { IsComponentObject } from '@theme/types/IsComponentObject'

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

  render(
    templateFilePath: string,
    config: IsComponentObject,
    options?: { [key: string]: any }
  ): Promise<string> {
    const _config = options ? { ...config, ...options } : { ...config }
    return ejs.render(templateFilePath, _config, this.options) as Promise<
      string
    >
  }
}
