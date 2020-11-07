import { ComponentTypeName } from '@theme/types/ComponentTypeName'
import { IsConfig } from '@theme/types/IsConfig'

export type DependencyOffer = {
  [key in ComponentTypeName]?: IsConfig
}

export default DependencyOffer
