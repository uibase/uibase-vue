import path from 'path'
import TemplateEjsRenderer from '@helper/TemplateRenderer/TemplateEjsRenderer'
import CssStyleManager from '@helper/StyleManager/CssStyleManager'
import { ComponentTypeName } from '@theme/types/ComponentTypeName'
import { componentNamePath } from '@src/providers/helper'
import UserConfig from '@theme/types/UserConfig'
import ComponentObject from '@theme/config/ComponentObject'
import { IsComponentObject } from '@theme/types/IsComponentObject'

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
    userConfig: UserConfig
  ): Promise<string> => {
    const pwd = process.env.PWD || ''
    if (userConfig.icon) {
      if (typeof userConfig.icon.paths === 'string') {
        userConfig.icon.paths = path.resolve(pwd, userConfig.icon.paths)
      }
    }
    const config = new ComponentObject(userConfig)
    const name = targetName !== 'global' ? targetName : ''
    if (name) {
      return templateRenderer.render(
        templateStr,
        config[name]() as IsComponentObject
      )
    } else {
      return Promise.reject(
        `ComponentObjectError:: ${targetName} is not defined.`
      )
    }
  }
}
