import { Background } from '@uiConfig/common/Background'
import { Border } from '@uiConfig/common/Border'
import { FontColor, FontSize, FontWeight } from '@uiConfig/common/Font'
import { Height } from '@uiConfig/common/Height'
import { Opacity } from '@uiConfig/common/Opacity'
import { Radius } from '@uiConfig/common/Radius'
import { Shadow } from '@uiConfig/common/Shadow'
import { Width } from '@uiConfig/common/Width'
import { Margin } from '@uiConfig/common/Margin'

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
