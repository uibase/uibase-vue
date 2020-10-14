import { RequiredBackground } from '@uiConfig/common/Background'
import {
  FontWeight,
  RequiredFontColor,
  RequiredFontSize
} from '@uiConfig/common/Font'
import { Shadow } from '@uiConfig/common/Shadow'
import { Radius } from '@uiConfig/common/Radius'
import { RequiredHeight } from '@uiConfig/common/Height'
import { Opacity } from '@uiConfig/common/Opacity'
import { Border } from '@uiConfig/common/Border'

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

type Button = Radius & ButtonColors & ButtonSizes

export default Button
