import TemplateEjsRenderer from '@helper/TemplateRenderer/TemplateEjsRenderer'
import CssStyleManager from '@helper/StyleManager/CssStyleManager'
import ThemeConfig from '@uiConfig/ThemeConfig'
import { ComponentTypeName } from '@theme/types/ComponentTypeName'
import UBConfig from '@theme/config/UBConfig'
import { isConfig } from '@uiConfig/isConfig'
import { componentNamePath } from '@factory/ComponentProviderFactory/helper'

const templateRenderer = new TemplateEjsRenderer(new CssStyleManager())

export default {
  getComponentNameFromPath: (path: string): string => {
    try {
      const result = componentNamePath(path, 'ejs')
      return result[0]
    } catch (e) {
      throw e
    }
  },
  vueTemplateRenderer: (
    targetName: ComponentTypeName,
    templateStr: string,
    themeConfig: ThemeConfig
  ): Promise<string> => {
    const config = new UBConfig(themeConfig)
    const name = targetName !== 'global' ? targetName : ''
    if (name) {
      return templateRenderer.render(templateStr, config[name]() as isConfig)
    } else {
      return Promise.reject(`ThemeConfigError:: ${targetName} is not defined.`)
    }
  }
}
