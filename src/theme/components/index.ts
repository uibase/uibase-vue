import BoxComponent, { defaultConfig as boxDefaultConfig } from './BoxComponent'
import ButtonComponent, {
  defaultConfig as buttonDefaultConfig
} from './ButtonComponent'
import ContainerComponent, {
  defaultConfig as containerDefaultConfig
} from './ContainerComponent'
import HeaderComponent, {
  defaultConfig as headerDefaultConfig
} from './HeaderComponent'
import SidebarComponent, {
  defaultConfig as sidebarDefaultConfig
} from './SidebarComponent'
import ThemeColorComponent, {
  defaultConfig as themeColorDefaultConfig
} from './ThemeColorComponent'
import IconComponent, {
  defaultConfig as iconDefaultConfig
} from './IconComponents'
import ThemeConfig from '../types/configations/ThemeConfig'
import IThemeComponent from './IThemeComponent'

export { BoxComponent }
export { ButtonComponent }
export { ContainerComponent }
export { HeaderComponent }
export { SidebarComponent }
export { ThemeColorComponent }
export { IconComponent }

export const defaultConfig: ThemeConfig = {
  box: boxDefaultConfig,
  button: buttonDefaultConfig,
  colors: themeColorDefaultConfig,
  container: containerDefaultConfig,
  header: headerDefaultConfig,
  sidebar: sidebarDefaultConfig,
  icons: iconDefaultConfig
}

export default (
  themeConfig: ThemeConfig
): {
  styles: IThemeComponent[]
  scripts: { [filename: string]: IThemeComponent }
} => {
  return {
    styles: [
      new ThemeColorComponent(themeConfig.colors),
      new ButtonComponent(themeConfig.button),
      new ContainerComponent(themeConfig.container),
      new BoxComponent(themeConfig.box),
      new HeaderComponent(themeConfig.header),
      new SidebarComponent(themeConfig.sidebar)
    ],
    scripts: {
      icons: new IconComponent(themeConfig.icons)
    }
  }
}
