import { RequiredBackground } from '@theme/types/commonProps/Background'
import { FontColor } from '@theme/types/commonProps/Font'
import { Shadow } from '@theme/types/commonProps/Shadow'
import { Border } from '@theme/types/commonProps/Border'
import { RequiredRadius } from '@theme/types/commonProps/Radius'

type NumberBudgeConfig = RequiredRadius &
  RequiredBackground &
  FontColor &
  Shadow &
  Border

export type NumberBudgeComponentObject = NumberBudgeConfig

export default NumberBudgeConfig
