import BoxComponent, { defaultConfig as boxDefaultConfig } from './BoxComponent'
import ButtonComponent from './Button/ButtonComponent'
import buttonDefaultConfig from './Button/defaultConfig'
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
import ThemeConfig from '@uiConfig/ThemeConfig'
import IThemeComponent from './IThemeComponent'
import StyleguideRequiresComponent from './StyleguideRequiresComponent'
import { listSvgFileNames } from '../../helpers/listSvgFileNames'
import { VueButtonComponent } from '@theme/components/Button'

export { BoxComponent }
export { ButtonComponent }
export { ContainerComponent }
export { HeaderComponent }
export { SidebarComponent }
export { ThemeColorComponent }
export { IconComponent }

export type ThemeComponents = {
  box: IThemeComponent<string>
  button: IThemeComponent<string>
  colors: IThemeComponent<string>
  container: IThemeComponent<string>
  header: IThemeComponent<string>
  sidebar: IThemeComponent<string>
  icons: IThemeComponent<string>
  styleguide: IThemeComponent<string>
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
  global: {
    colors: themeColorDefaultConfig
  },
  box: boxDefaultConfig,
  button: buttonDefaultConfig,
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

  const styleguideConfig = {
    ...themeConfig,
    ...{
      icons: icons
    }
  }

  return {
    colors: new ThemeColorComponent(themeConfig.global.colors),
    button: new VueButtonComponent(themeConfig.button, themeConfig.global),
    container: new ContainerComponent(themeConfig.container),
    box: new BoxComponent(themeConfig.box),
    header: new HeaderComponent(themeConfig.header),
    sidebar: new SidebarComponent(themeConfig.sidebar),
    icons: new IconComponent(icons),
    styleguide: new StyleguideRequiresComponent(styleguideConfig)
  }
}
