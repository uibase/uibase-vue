import UserConfig from '@theme/types/UserConfig'
import replaceGlobalVariables from '@theme/config/decorators/replaceGlobalVariables'
import DependencyOffer from '@theme/types/DependencyOffers'
import IComponentModel from '@theme/config/interfaces/IComponentModel'
import { AvatarComponentObject } from '@theme/types/components/Avatar'

export default class AvatarComponentModel
  implements IComponentModel<AvatarComponentObject> {
  private userConfig: UserConfig
  constructor(userConfig: UserConfig) {
    this.userConfig = userConfig
  }
  @replaceGlobalVariables
  generate(): AvatarComponentObject {
    return this.userConfig.avatar as AvatarComponentObject
  }
  offerDependenciesToProvider(): DependencyOffer {
    return {}
  }
}
