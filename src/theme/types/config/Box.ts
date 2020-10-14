import { FontColor, FontSize, FontWeight } from '@uiConfig/common/Font'
import { Border } from '@uiConfig/common/Border'
import { Shadow } from '@uiConfig/common/Shadow'
import { Radius } from '@uiConfig/common/Radius'
import { RequiredBackground } from '@uiConfig/common/Background'
import { Margin } from '@uiConfig/common/Margin'

export type BoxStyle = RequiredBackground &
  FontColor &
  Border &
  Shadow & {
    footerDivide?: Border
    default?: boolean
  }

export type Box = Radius & {
  title: Margin & FontWeight & FontSize
  styles: {
    [styleName: string]: BoxStyle
  }
}

export default Box
