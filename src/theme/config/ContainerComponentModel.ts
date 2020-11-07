import UserConfig from '@theme/types/UserConfig'
import replaceGlobalVariables from '@theme/config/decorators/replaceGlobalVariables'
import DependencyOffer from '@theme/types/DependencyOffers'
import IComponentModel from '@theme/config/interfaces/IComponentModel'
import { ContainerComponentObject } from '@theme/types/components/Container'

export default class ContainerComponentModel
  implements IComponentModel<ContainerComponentObject> {
  private userConfig: UserConfig
  constructor(userConfig: UserConfig) {
    this.userConfig = userConfig
  }
  @replaceGlobalVariables
  generate(): ContainerComponentObject {
    return this.userConfig.container as ContainerComponentObject
  }
  offerDependenciesToProvider(): DependencyOffer {
    return {}
  }
}
