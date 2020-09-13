import IThemeComponent from './IThemeComponent'
import Header from '../types/configations/Header'

export const defaultConfig: Header = {
  bgColor: '$white',
  bottomBorder: '1px solid #ccc',
  color: '$black',
  hasShadow: false,
  shadowColor: '',
  height: 50
}

export default class HeaderComponent implements IThemeComponent {
  private headerConfig: Header
  constructor(headerConfig: Header = defaultConfig) {
    this.headerConfig = { ...defaultConfig, ...headerConfig }
  }
  generate(): string {
    return `
// About Header
$headerHeight: 50px;
$headerBackgroundColor: $white;
$headerTextColor: $black;

// header shadow condition
$headerShadow: true;
$headerShadowColor: rgba(0, 0, 0, 0.2);

// header bottom border
// set border style condition, if you want to set border.
$headerBottomBorder: 1px solid #ccc;
    `
  }
}
