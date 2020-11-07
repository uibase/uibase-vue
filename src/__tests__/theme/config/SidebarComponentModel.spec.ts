import defaultConfig from '@src/utils/defaultConfig'
import SidebarComponentModel from '@theme/config/SidebarComponentModel'
import DependencyProvider from '@theme/config/DependencyProvider'
test('SidebarComponentModel', () => {
  const sidebarConfig = {
    global: defaultConfig.global,
    sidebar: defaultConfig.sidebar
  }
  const sidebar = new SidebarComponentModel(sidebarConfig)
  console.log(sidebar.offerDependenciesToProvider())
  const dependencyProvider = new DependencyProvider(
    sidebar.offerDependenciesToProvider()
  )
  console.log(dependencyProvider.icon(sidebarConfig))
})
