import UserConfig from '@theme/types/UserConfig'
import replaceGlobalVariables from '@theme/config/decorators/replaceGlobalVariables'
import defaultConfig from '@src/utils/defaultConfig'
import DependencyOffer from '@theme/types/DependencyOffers'
import { SidebarComponentObject } from '@theme/types/components/Sidebar'
import IComponentModel from '@theme/config/interfaces/IComponentModel'

export default class SidebarComponentModel
  implements IComponentModel<SidebarComponentObject> {
  private userConfig: UserConfig
  constructor(userConfig: UserConfig) {
    this.userConfig = userConfig
  }
  @replaceGlobalVariables
  generate(): SidebarComponentObject {
    return this.userConfig.sidebar as SidebarComponentObject
  }
  offerDependenciesToProvider(): DependencyOffer {
    return {
      icon: defaultConfig.icon,
      numberBudge: defaultConfig.numberBudge
    }
  }
}
