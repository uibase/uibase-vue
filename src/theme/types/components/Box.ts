import { FontColor, FontSize, FontWeight } from '@theme/types/commonProps/Font'
import { Border } from '@theme/types/commonProps/Border'
import { Shadow } from '@theme/types/commonProps/Shadow'
import { Radius } from '@theme/types/commonProps/Radius'
import { RequiredBackground } from '@theme/types/commonProps/Background'
import { Margin } from '@theme/types/commonProps/Margin'

export type BoxStyle = RequiredBackground &
  FontColor &
  Border &
  Shadow & {
    footerDivide?: Border
    default?: boolean
  }

export type BoxConfig = Radius & {
  title: Margin & FontWeight & FontSize
  styles: {
    [styleName: string]: BoxStyle
  }
}

export type BoxComponentObject = BoxConfig

export default BoxConfig
