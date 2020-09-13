import ButtonComponent from './components/ButtonComponent'
import ThemeColorComponent from './components/ThemeColorComponent'
import BoxComponent from './components/BoxComponent'
import ContainerComponent from './components/ContainerComponent'
import HeaderComponent from './components/HeaderComponent'
import SidebarComponent from './components/SidebarComponent'

import ThemeConfig from './types/configations/ThemeConfig'

export default (themeConfig: ThemeConfig): string => {
  let str = ''

  str += new ThemeColorComponent(themeConfig.colors).generate()
  str += new ButtonComponent(themeConfig.button).generate()
  str += new BoxComponent(themeConfig.box).generate()
  str += new ContainerComponent(themeConfig.container).generate()
  str += new HeaderComponent(themeConfig.header).generate()
  str += new SidebarComponent(themeConfig.sidebar).generate()

  return str
}
