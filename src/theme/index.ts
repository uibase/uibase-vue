import createThemeComponents, {
  ComponentName,
  defaultConfig,
  ThemeComponents
} from './components'
import ThemeConfig from './types/configations/ThemeConfig'
import IThemeComponent from './components/IThemeComponent'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const deepmerge = require('deepmerge')
interface IBaseUiTheme {
  create(name: ComponentName): string
}

export default class BaseUiTheme implements IBaseUiTheme {
  private readonly config: ThemeConfig
  private components: ThemeComponents
  constructor(config: ThemeConfig) {
    this.config = config
    this.components = createThemeComponents(this.config)
  }

  create(name: ComponentName): string {
    return this.components[name].generate()
  }

  createStyles(): string {
    const styles: IThemeComponent[] = [
      this.components.colors,
      this.components.box,
      this.components.header,
      this.components.container,
      this.components.sidebar,
      this.components.button
    ]

    return styles.reduce((str, component) => (str += component.generate()), '')
  }

  static getDefaultConfig(): ThemeConfig {
    return defaultConfig
  }
  static mergeConfig(...themeConfigs: ThemeConfig[]): ThemeConfig {
    return deepmerge.all(themeConfigs) as ThemeConfig
  }
}
