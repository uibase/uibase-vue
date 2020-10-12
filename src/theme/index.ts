import createThemeComponents, {
  ComponentName,
  defaultConfig,
  ThemeComponents
} from './components'
import ThemeConfig from '@uiConfig/ThemeConfig'
import IThemeComponent from '@theme/components/IThemeComponent'
import { Style } from 'util'
import { merge } from 'webpack-merge'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const deepmerge = require('deepmerge')
interface IBaseUiTheme {
  create(name: ComponentName): Promise<any>
}

export default class BaseUiTheme implements IBaseUiTheme {
  private readonly config: ThemeConfig
  private components: ThemeComponents
  constructor(config: ThemeConfig) {
    this.config = config
    this.components = createThemeComponents(this.config)
  }

  create(name: ComponentName): Promise<any> {
    return this.components[name].generate()
  }

  createStyles(): Promise<string> {
    const styles: { [key: string]: IThemeComponent<string> } = {
      colors: this.components.colors,
      box: this.components.box,
      header: this.components.header,
      container: this.components.container,
      sidebar: this.components.sidebar
    }
    type ComponentName = string
    type StyleSheetString = string

    const mergeStyle = (
      componentName: ComponentName,
      component: IThemeComponent<string>
    ): Promise<[ComponentName, StyleSheetString]> => {
      return component.generate().then((styleSheetStr: StyleSheetString) => {
        return Promise.resolve([componentName, styleSheetStr])
      })
    }

    const promises = Object.keys(styles).map((componentName: ComponentName) => {
      return mergeStyle(componentName, styles[componentName])
    })
    return Promise.all(promises).then(
      (results: [ComponentName, StyleSheetString][]) => {
        // color first
        const colorIndex = results.findIndex(([name]) => name === 'colors')
        const colorStyle: [ComponentName, StyleSheetString] = results.splice(
          colorIndex,
          1
        )[0]
        let styleString = colorStyle[1]
        results.forEach(([name, str]) => (styleString += str + `\n`))
        return Promise.resolve(styleString)
      }
    )
  }

  static getDefaultConfig(): ThemeConfig {
    return defaultConfig
  }
  static mergeConfig(...themeConfigs: ThemeConfig[]): ThemeConfig {
    return deepmerge.all(themeConfigs) as ThemeConfig
  }
}
