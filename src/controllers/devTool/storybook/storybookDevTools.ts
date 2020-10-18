import path from 'path'
import { ComponentType } from '@theme/types/ComponentType'
import UiBaseTemplateProviderPlugin from '@src/controllers/plugins/webpack/UiBaseTemplateProviderPlugin'
import UiBaseStorybookProviderPlugin from '@src/controllers/plugins/webpack/UiBaseStorybookProviderPlugin'
import { componentNamePath } from '@factory/ComponentProviderFactory/helper'
import { ComponentTypeName } from '@theme/types/ComponentTypeName'
import ThemeConfig from '@uiConfig/ThemeConfig'
import UBConfig from '@theme/config/UBConfig'
import { isConfig } from '@uiConfig/isConfig'
import StorybookEjsRenderer from '@src/controllers/storybook/StorybookEjsRenderer'

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
        pathToProvide: templatePathToProvide,
        configPath
      }),
      new UiBaseStorybookProviderPlugin({
        type: 'vue',
        configPath,
        pathToProvide: storybookPathToProvide,
        importPath: './uiBase'
      })
    ]
  },
  storyTemplateRenderer: (
    targetName: ComponentTypeName,
    templateStr: string,
    themeConfig: ThemeConfig,
    type: ComponentType,
    path: string
  ): Promise<string> => {
    const config = new UBConfig(themeConfig)
    const templateRenderer = new StorybookEjsRenderer(type, path)
    const name = targetName !== 'global' ? targetName : ''
    if (name) {
      return templateRenderer.render(templateStr, config[name]() as isConfig)
    } else {
      return Promise.reject(`ThemeConfigError:: ${targetName} is not defined.`)
    }
  }
}
