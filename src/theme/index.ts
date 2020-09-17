import createThemeComponents, { defaultConfig } from './components'
import ThemeConfig from './types/configations/ThemeConfig'
import IThemeComponent from './components/IThemeComponent'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const deepmerge = require('deepmerge')
interface IBaseUiTheme {
  createStyles(): string
  createScript(filename: string): string
}

export default class BaseUiTheme implements IBaseUiTheme {
  private readonly config: ThemeConfig
  private components: {
    styles: IThemeComponent[]
    scripts: { [filename: string]: IThemeComponent }
  }
  constructor(config: ThemeConfig) {
    this.config = config
    this.components = createThemeComponents(this.config)
  }
  createStyles(): string {
    return this.components.styles.reduce(
      (str, component) => (str += component.generate()),
      ''
    )
  }

  createScript(scriptName: string): string {
    const component: IThemeComponent = this.components.scripts[scriptName]
    return component.generate()
  }

  static getDefaultConfig(): ThemeConfig {
    return defaultConfig
  }
  static mergeConfig(...themeConfigs: ThemeConfig[]): ThemeConfig {
    return deepmerge.all(themeConfigs) as ThemeConfig
  }
}
