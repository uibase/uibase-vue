import { RequiredBackground } from '@theme/types/commonProps/Background'
import {
  FontWeight,
  RequiredFontColor,
  RequiredFontSize
} from '@theme/types/commonProps/Font'
import { Shadow } from '@theme/types/commonProps/Shadow'
import { Radius } from '@theme/types/commonProps/Radius'
import { RequiredHeight } from '@theme/types/commonProps/Height'
import { Opacity } from '@theme/types/commonProps/Opacity'
import { Border } from '@theme/types/commonProps/Border'

type ButtonState = RequiredBackground &
  RequiredFontColor &
  FontWeight &
  Shadow &
  Border

export type ButtonConditions = ButtonState & {
  hover: ButtonState & Opacity
}

export type ButtonColors = {
  colors: {
    primary: ButtonConditions
    secondary: ButtonConditions
    [key: string]: ButtonConditions
  }
}

export type ButtonSizes = {
  sizes: {
    [sizeName: string]: RequiredFontSize &
      RequiredHeight & {
        default?: boolean
      }
  }
}

export type ButtonConfig = Radius & ButtonColors & ButtonSizes

export type ButtonComponentObject = ButtonConfig

export default ButtonConfig
