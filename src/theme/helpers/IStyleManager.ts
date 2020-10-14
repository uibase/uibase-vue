import { ConfigProperties } from '@uiConfig/ConfigProperties'
import { BackgroundProperties } from '@uiConfig/common/Background'
import { BorderProperties } from '@uiConfig/common/Border'
import {
  FontColorProperties,
  FontSizeProperties,
  FontWeightProperties
} from '@uiConfig/common/Font'
import { HeightProperties } from '@uiConfig/common/Height'
import { WidthProperties } from '@uiConfig/common/Width'
import { RadiusProperties } from '@uiConfig/common/Radius'
import { OpacityProperties } from '@uiConfig/common/Opacity'
import { ShadowProperties } from '@uiConfig/common/Shadow'
import { MarginProperties } from '@uiConfig/common/Margin'

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
