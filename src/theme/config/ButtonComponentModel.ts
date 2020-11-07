import UserConfig from '@theme/types/UserConfig'
import replaceGlobalVariables from '@theme/config/decorators/replaceGlobalVariables'
import DependencyOffer from '@theme/types/DependencyOffers'
import IComponentModel from '@theme/config/interfaces/IComponentModel'
import { ButtonComponentObject } from '@theme/types/components/Button'

export default class ButtonComponentModel
  implements IComponentModel<ButtonComponentObject> {
  private userConfig: UserConfig
  constructor(userConfig: UserConfig) {
    this.userConfig = userConfig
  }
  @replaceGlobalVariables
  generate(): ButtonComponentObject {
    return this.userConfig.button as ButtonComponentObject
  }
  offerDependenciesToProvider(): DependencyOffer {
    return {}
  }
}
