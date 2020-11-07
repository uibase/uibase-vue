import UserConfig from '@theme/types/UserConfig'
import replaceGlobalVariables from '@theme/config/decorators/replaceGlobalVariables'
import DependencyOffer from '@theme/types/DependencyOffers'
import IComponentModel from '@theme/config/interfaces/IComponentModel'
import { HeaderComponentObject } from '@theme/types/components/Header'

export default class HeaderComponentModel
  implements IComponentModel<HeaderComponentObject> {
  private userConfig: UserConfig
  constructor(userConfig: UserConfig) {
    this.userConfig = userConfig
  }
  @replaceGlobalVariables
  generate(): HeaderComponentObject {
    return this.userConfig.header as HeaderComponentObject
  }
  offerDependenciesToProvider(): DependencyOffer {
    return {}
  }
}
