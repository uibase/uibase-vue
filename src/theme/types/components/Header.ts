import { RequiredBackground } from '@theme/types/commonProps/Background'
import { RequiredHeight } from '@theme/types/commonProps/Height'
import { FontColor } from '@theme/types/commonProps/Font'
import { Shadow } from '@theme/types/commonProps/Shadow'
import { Border } from '@theme/types/commonProps/Border'

type HeaderConfig = RequiredHeight &
  RequiredBackground &
  FontColor &
  Shadow & {
    bottomBorder?: Border
  }

export type HeaderComponentObject = HeaderConfig

export default HeaderConfig
