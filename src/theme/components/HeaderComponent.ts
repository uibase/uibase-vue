import IThemeComponent from '@theme/components/IThemeComponent'
import Header from '@uiConfig/Header'

export const defaultConfig: Header = {
  background: '$white',
  bottomBorder: {
    border: '1px solid #ccc'
  },
  fontColor: '$black',
  height: 50
}

export default class HeaderComponent implements IThemeComponent<string> {
  private config: Header
  constructor(config: Header) {
    this.config = config
  }
  generate(): Promise<string> {
    const str = `
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
    return Promise.resolve(str)
  }
}
