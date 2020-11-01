import { RequiredWidth } from '@theme/types/commonProps/Width'
import { RequiredBackground } from '@theme/types/commonProps/Background'
import { FontColor, RequiredFontColor } from '@theme/types/commonProps/Font'

type SidebarConfig = RequiredWidth &
  RequiredBackground &
  FontColor & {
    menuHeader: RequiredBackground
    active: RequiredBackground & RequiredFontColor
  }

export type SidebarComponentObject = SidebarConfig

export default SidebarConfig
