import { RequiredBackground } from '@uiConfig/common/Background'
import { RequiredHeight } from '@uiConfig/common/Height'
import { FontColor } from '@uiConfig/common/Font'
import { Shadow } from '@uiConfig/common/Shadow'
import { Border } from '@uiConfig/common/Border'

type Header = RequiredHeight &
  RequiredBackground &
  FontColor &
  Shadow & {
    bottomBorder?: Border
  }

export default Header
