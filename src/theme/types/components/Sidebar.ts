import { RequiredWidth } from '@theme/types/commonProps/Width'
import { RequiredBackground } from '@theme/types/commonProps/Background'
import {
  FontColor,
  FontWeight,
  RequiredFontColor
} from '@theme/types/commonProps/Font'
import Color from '@theme/types/commonProps/Color'

type SidebarState = RequiredBackground &
  RequiredFontColor &
  FontWeight & {
    icon: Color
  }

type SidebarConfig = RequiredWidth &
  RequiredBackground &
  FontColor & {
    icon: Color
    menuHeader: RequiredBackground
    active: SidebarState
    hover: SidebarState
    variant: 'default' | 'round'
  }

export type SidebarComponentObject = SidebarConfig

export default SidebarConfig
