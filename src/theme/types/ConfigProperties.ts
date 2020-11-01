import { Background } from '@theme/types/commonProps/Background'
import { Border } from '@theme/types/commonProps/Border'
import { FontColor, FontSize, FontWeight } from '@theme/types/commonProps/Font'
import { Height } from '@theme/types/commonProps/Height'
import { Opacity } from '@theme/types/commonProps/Opacity'
import { Radius } from '@theme/types/commonProps/Radius'
import { Shadow } from '@theme/types/commonProps/Shadow'
import { Width } from '@theme/types/commonProps/Width'
import { Margin } from '@theme/types/commonProps/Margin'

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
  Width & {
    [propName: string]: any
  }
