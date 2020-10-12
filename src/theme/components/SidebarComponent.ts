import IThemeComponent from '@theme/components/IThemeComponent'
import Sidebar from '@uiConfig/Sidebar'

export const defaultConfig: Sidebar = {
  active: {
    background: '$white',
    fontColor: '#333'
  },
  background: '$black',
  fontColor: '$white',
  menuHeader: { background: '$black' },
  width: 200
}

export default class SidebarComponent implements IThemeComponent<string> {
  config: Sidebar
  constructor(config: Sidebar) {
    this.config = config
  }

  generate(): Promise<string> {
    const str = `
// About Sidebar
// sidebar Color for usual
$sidebarWidth: 200px;
$sidebarBackgroundColor: #333;
$sidebarMenuHeaderBackgroundColor: $black;
$sidebarTextColor: $white;
// side color when active
$sidebarActiveBackgroundColor: $white;
$sidebarActiveTextColor: #333;
    `
    return Promise.resolve(str)
  }
}
