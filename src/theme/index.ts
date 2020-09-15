import deepmerge from 'deepmerge'
import createThemeComponents, { defaultConfig } from './components'
import ThemeConfig from './types/configations/ThemeConfig'

interface IBaseUiTheme {
  create(config: ThemeConfig): string
  mergeConfig(...config: ThemeConfig[]): ThemeConfig
  getDefaultConfig(): ThemeConfig
}

export default class BaseUiTheme implements IBaseUiTheme {
  create(themeConfig: ThemeConfig): string {
    const components = createThemeComponents(themeConfig)
    return components.reduce(
      (str, component) => (str += component.generate()),
      ''
    )
  }

  getDefaultConfig(): ThemeConfig {
    return defaultConfig
  }
  mergeConfig(...themeConfigs: ThemeConfig[]): ThemeConfig {
    return deepmerge.all(themeConfigs) as ThemeConfig
  }
}
