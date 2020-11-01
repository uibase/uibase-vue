import { ConfigProperties } from '@theme/types/ConfigProperties'
import { BackgroundProperties } from '@theme/types/commonProps/Background'
import { BorderProperties } from '@theme/types/commonProps/Border'
import {
  FontColorProperties,
  FontSizeProperties,
  FontWeightProperties
} from '@theme/types/commonProps/Font'
import { HeightProperties } from '@theme/types/commonProps/Height'
import { WidthProperties } from '@theme/types/commonProps/Width'
import { RadiusProperties } from '@theme/types/commonProps/Radius'
import { OpacityProperties } from '@theme/types/commonProps/Opacity'
import { ShadowProperties } from '@theme/types/commonProps/Shadow'
import { MarginProperties } from '@theme/types/commonProps/Margin'

export default interface IStyleManager<T> {
  background(config: BackgroundProperties): T
  margin(config: MarginProperties): T
  border(config: BorderProperties): T
  fontColor(config: FontColorProperties): T
  fontWeight(config: FontWeightProperties): T
  fontSize(config: FontSizeProperties): T
  height(config: HeightProperties): T
  width(config: WidthProperties): T
  radius(config: RadiusProperties): T
  opacity(config: OpacityProperties): T
  shadow(config: ShadowProperties): T
  generate(configProperties: ConfigProperties): T
}
