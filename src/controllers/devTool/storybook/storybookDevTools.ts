import path from 'path'
import { ComponentType } from '@theme/types/ComponentType'
import UiBaseTemplateProviderPlugin from '@src/controllers/plugins/webpack/UiBaseTemplateProviderPlugin'
import UiBaseStorybookProviderPlugin from '@src/controllers/plugins/webpack/UiBaseStorybookProviderPlugin'
import { componentNamePath } from '@src/providers/helper'
import { ComponentTypeName } from '@theme/types/ComponentTypeName'
import StorybookEjsRenderer from '@src/controllers/storybook/StorybookEjsRenderer'
import UserConfig from '@theme/types/UserConfig'
import ComponentObject from '@theme/config/ComponentObject'
import { IsComponentObject } from '@theme/types/IsComponentObject'

export default {
  getStoryNameFromPath: (path: string): string => {
    try {
      const result = componentNamePath(path, 'stories\\.ejs')
      return result[0]
    } catch (e) {
      throw e
    }
  },
  getStoryMDXNameFromPath: (path: string): string => {
    try {
      const result = componentNamePath(path, 'stories\\.mdx\\.ejs')
      return result[0]
    } catch (e) {
      throw e
    }
  },
  UiBasePlugin: (
    type: ComponentType
  ): [UiBaseTemplateProviderPlugin, UiBaseStorybookProviderPlugin] => {
    const pwd = process.env.PWD || ''
    const configPath = path.join(pwd, './uibase.config.js')
    const templatePathToProvide = path.join(pwd, './workspace/storybook/uiBase')
    const storybookPathToProvide = path.join(pwd, './workspace/storybook')
    return [
      new UiBaseTemplateProviderPlugin({
        type,
        router: 'router-link',
        pathToProvide: templatePathToProvide,
        configPath
      }),
      new UiBaseStorybookProviderPlugin({
        type: 'vue',
        router: 'router-link',
        configPath,
        pathToProvide: storybookPathToProvide,
        importPath: './uiBase'
      })
    ]
  },
  storyTemplateRenderer: (
    targetName: ComponentTypeName,
    templateStr: string,
    userConfig: UserConfig,
    type: ComponentType,
    path: string
  ): Promise<string> => {
    const config = new ComponentObject(userConfig)
    const templateRenderer = new StorybookEjsRenderer(type, path)
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
