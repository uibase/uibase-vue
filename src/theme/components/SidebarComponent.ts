import IThemeComponent from './IThemeComponent'
import Sidebar from '../types/configations/Sidebar'

export const defaultConfig: Sidebar = {
  active: { bgColor: '$white', color: '#333' },
  bgColor: '$black',
  color: '$white',
  menuHeader: { bgColor: '$black' },
  width: 200
}

export default class SidebarComponent implements IThemeComponent {
  sidebarConfig: Sidebar
  constructor(sidebarConfig: Sidebar = defaultConfig) {
    this.sidebarConfig = { ...defaultConfig, ...sidebarConfig }
  }

  generate(): string {
    return `
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
  }
}
