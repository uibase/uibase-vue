import { RequiredBackground } from '@theme/types/commonProps/Background'
import { FontColor } from '@theme/types/commonProps/Font'

type ContainerConfig = {
  header: RequiredBackground & FontColor
  footer: RequiredBackground
}

export type ContainerComponentObject = ContainerConfig

export default ContainerConfig
