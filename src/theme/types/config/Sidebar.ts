import { RequiredWidth } from '@uiConfig/common/Width'
import { RequiredBackground } from '@uiConfig/common/Background'
import { FontColor, RequiredFontColor } from '@uiConfig/common/Font'

type Sidebar = RequiredWidth &
  RequiredBackground &
  FontColor & {
    menuHeader: RequiredBackground
    active: RequiredBackground & RequiredFontColor
  }

export default Sidebar
