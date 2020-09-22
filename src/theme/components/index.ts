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
import StyleguideRequiresComponent from './StyleguideRequiresComponent'
import { listSvgFileNames } from '../helpers/listSvgFileNames'

export { BoxComponent }
export { ButtonComponent }
export { ContainerComponent }
export { HeaderComponent }
export { SidebarComponent }
export { ThemeColorComponent }
export { IconComponent }

export type ThemeComponents = {
  box: IThemeComponent
  button: IThemeComponent
  colors: IThemeComponent
  container: IThemeComponent
  header: IThemeComponent
  sidebar: IThemeComponent
  icons: IThemeComponent
  styleguide: IThemeComponent
}

export type ComponentName =
  | 'colors'
  | 'box'
  | 'button'
  | 'container'
  | 'sidebar'
  | 'header'
  | 'icons'
  | 'styleguide'

export const defaultConfig: ThemeConfig = {
  box: boxDefaultConfig,
  button: buttonDefaultConfig,
  colors: themeColorDefaultConfig,
  container: containerDefaultConfig,
  header: headerDefaultConfig,
  sidebar: sidebarDefaultConfig,
  icons: iconDefaultConfig
}

export default (themeConfig: ThemeConfig): ThemeComponents => {
  const icons =
    typeof themeConfig.icons === 'string'
      ? listSvgFileNames(themeConfig.icons)
      : themeConfig.icons

  return {
    colors: new ThemeColorComponent(themeConfig.colors),
    button: new ButtonComponent(themeConfig.button),
    container: new ContainerComponent(themeConfig.container),
    box: new BoxComponent(themeConfig.box),
    header: new HeaderComponent(themeConfig.header),
    sidebar: new SidebarComponent(themeConfig.sidebar),
    icons: new IconComponent(icons),
    styleguide: new StyleguideRequiresComponent({
      icons
    })
  }
}
