import UserConfig from '@theme/types/UserConfig'
import replaceGlobalVariables from '@theme/config/decorators/replaceGlobalVariables'
import DependencyOffer from '@theme/types/DependencyOffers'
import IComponentModel from '@theme/config/interfaces/IComponentModel'
import IconConfig, { IconComponentObject } from '@theme/types/components/Icon'
import { listSvgFileNames } from '@helper/listSvgFileNames'
import ubArrowDown from '@theme/DefaultIcons/ubArrowDown.svg'
import ubXmark from '@theme/DefaultIcons/ubXmark.svg'

export default class IconComponentModel
  implements IComponentModel<IconComponentObject> {
  private userConfig: UserConfig
  constructor(userConfig: UserConfig) {
    this.userConfig = userConfig
  }
  @replaceGlobalVariables
  generate(): IconComponentObject {
    const icons = { ...this.userConfig.icon } as IconConfig
    if (typeof icons.paths === 'string' && icons.paths.length > 0) {
      icons.paths = listSvgFileNames(icons.paths as string)
    } else {
      icons.paths = {}
    }
    if (icons.defaultColors) {
      icons.colors = {
        ...icons.colors,
        ...this.userConfig.global.colors
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { defaultColors, ...result } = icons
      // SetDefaultIcons
    ;(result as IconComponentObject).defaultIcons = {
      ubArrowDown,
      ubXmark
    }
    return result as IconComponentObject
  }
  offerDependenciesToProvider(): DependencyOffer {
    return {}
  }
}
