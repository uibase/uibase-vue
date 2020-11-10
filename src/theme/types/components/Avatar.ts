import { Border } from '@theme/types/commonProps/Border'
import { Shadow } from '@theme/types/commonProps/Shadow'
import { Radius } from '@theme/types/commonProps/Radius'
import { Size } from '@theme/types/commonProps/Size'

export type AvatarStyle = Border &
  Radius &
  Shadow & {
    default?: boolean
  }

export type AvatarConfig = {
  anonymousImage?: string
  defaultSize: Size
  styles: {
    [styleName: string]: AvatarStyle
  }
}

export type AvatarComponentObject = AvatarConfig

export default AvatarConfig
