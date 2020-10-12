import { RequiredBackground } from '@uiConfig/common/Background'
import { RequiredFontColor, RequiredFontSize } from '@uiConfig/common/Font'
import { Shadow } from '@uiConfig/common/Shadow'
import { Radius } from '@uiConfig/common/Radius'
import { RequiredHeight } from '@uiConfig/common/Height'
import { RequiredWidth } from '@uiConfig/common/Width'
import { Opacity } from '@uiConfig/common/Opacity'

type ButtonState = RequiredBackground & RequiredFontColor & Shadow

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

type Button = Radius &
  ButtonColors &
  ButtonSizes & {
    bordered: RequiredWidth
  }

export default Button
