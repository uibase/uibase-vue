import UserConfig from '@theme/types/UserConfig'
import replaceGlobalVariables from '@theme/config/decorators/replaceGlobalVariables'
import DependencyOffer from '@theme/types/DependencyOffers'
import { BoxComponentObject } from '@theme/types/components/Box'
import IComponentModel from '@theme/config/interfaces/IComponentModel'

export default class BoxComponentModel
  implements IComponentModel<BoxComponentObject> {
  private userConfig: UserConfig
  constructor(userConfig: UserConfig) {
    this.userConfig = userConfig
  }
  @replaceGlobalVariables
  generate(): BoxComponentObject {
    return this.userConfig.box as BoxComponentObject
  }
  offerDependenciesToProvider(): DependencyOffer {
    return {}
  }
}
