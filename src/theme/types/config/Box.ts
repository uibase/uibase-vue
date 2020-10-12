import { FontColor } from '@uiConfig/common/Font'
import { Border } from '@uiConfig/common/Border'
import { Shadow } from '@uiConfig/common/Shadow'
import { Radius } from '@uiConfig/common/Radius'
import { RequiredBackground } from '@uiConfig/common/Background'

export type BoxStyle = RequiredBackground &
  FontColor &
  Border &
  Shadow & {
    footerDivide?: Border
  }

export type Box = Radius & {
  styles: {
    [styleName: string]: BoxStyle
  }
}

export default Box
