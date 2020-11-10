import { Background } from '@theme/types/commonProps/Background'
import { Border } from '@theme/types/commonProps/Border'
import { FontColor, FontSize, FontWeight } from '@theme/types/commonProps/Font'
import { Height } from '@theme/types/commonProps/Height'
import { Opacity } from '@theme/types/commonProps/Opacity'
import { Radius } from '@theme/types/commonProps/Radius'
import { Shadow } from '@theme/types/commonProps/Shadow'
import { Width } from '@theme/types/commonProps/Width'
import { Margin } from '@theme/types/commonProps/Margin'
import { Size } from '@theme/types/commonProps/Size'
import Color from '@theme/types/commonProps/Color'

export type ConfigProperties = Background &
  Margin &
  Border &
  FontColor &
  FontWeight &
  FontSize &
  Height &
  Opacity &
  Radius &
  Shadow &
  Size &
  Color &
  Width & {
    [propName: string]: any
  }
