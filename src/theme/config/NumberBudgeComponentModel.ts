import UserConfig from '@theme/types/UserConfig'
import replaceGlobalVariables from '@theme/config/decorators/replaceGlobalVariables'
import DependencyOffer from '@theme/types/DependencyOffers'
import IComponentModel from '@theme/config/interfaces/IComponentModel'
import { NumberBudgeComponentObject } from '@theme/types/components/NumberBudge'

export default class NumberBudgeComponentModel
  implements IComponentModel<NumberBudgeComponentObject> {
  private userConfig: UserConfig
  constructor(userConfig: UserConfig) {
    this.userConfig = userConfig
  }
  @replaceGlobalVariables
  generate(): NumberBudgeComponentObject {
    return this.userConfig.numberBudge as NumberBudgeComponentObject
  }
  offerDependenciesToProvider(): DependencyOffer {
    return {}
  }
}
