import DependencyOffer from '@theme/types/DependencyOffers'
import IconConfig, { IconComponentObject } from '@theme/types/components/Icon'
import BoxConfig, { BoxComponentObject } from '@theme/types/components/Box'
import ButtonConfig, {
  ButtonComponentObject
} from '@theme/types/components/Button'
import HeaderConfig, {
  HeaderComponentObject
} from '@theme/types/components/Header'
import ContainerConfig, {
  ContainerComponentObject
} from '@theme/types/components/Container'
import NumberBudgeConfig, {
  NumberBudgeComponentObject
} from '@theme/types/components/NumberBudge'
import SidebarConfig, {
  SidebarComponentObject
} from '@theme/types/components/Sidebar'
import { IsConfig } from '@theme/types/IsConfig'
import UserConfig from '@theme/types/UserConfig'
import IconComponentModel from '@theme/config/IconComponentModel'
import BoxComponentModel from '@theme/config/BoxComponentModel'
import ButtonComponentModel from '@theme/config/ButtonComponentModel'
import ContainerComponentModel from '@theme/config/ContainerComponentModel'
import HeaderComponentModel from '@theme/config/HeaderComponentModel'
import SidebarComponentModel from '@theme/config/SidebarComponentModel'
import NumberBudgeComponentModel from '@theme/config/NumberBudgeComponentModel'
import AvatarConfig, {
  AvatarComponentObject
} from '@theme/types/components/Avatar'
import AvatarComponentModel from '@theme/config/AvatarComponentModel'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const deepmerge = require('deepmerge')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cloneDeep = require('lodash.clonedeep')

type DependencyOfferName =
  | 'icon'
  | 'box'
  | 'button'
  | 'container'
  | 'header'
  | 'numberBudge'
  | 'sidebar'
  | 'avatar'

type LocalDependencyOfferName =
  | 'iconConfig'
  | 'boxConfig'
  | 'buttonConfig'
  | 'containerConfig'
  | 'headerConfig'
  | 'numberBudgeConfig'
  | 'sidebarConfig'
  | 'avatarConfig'

export default class DependencyProvider {
  private iconConfig: IconConfig | null
  private boxConfig: BoxConfig | null
  private buttonConfig: ButtonConfig | null
  private headerConfig: HeaderConfig | null
  private containerConfig: ContainerConfig | null
  private numberBudgeConfig: NumberBudgeConfig | null
  private sidebarConfig: SidebarConfig | null
  private avatarConfig: AvatarConfig | null

  constructor(...args: DependencyOffer[]) {
    this.iconConfig = null
    this.boxConfig = null
    this.buttonConfig = null
    this.containerConfig = null
    this.headerConfig = null
    this.numberBudgeConfig = null
    this.sidebarConfig = null
    this.avatarConfig = null

    args.forEach((offer: DependencyOffer) => {
      Object.keys(offer).forEach((key: string) => {
        const _key = key as DependencyOfferName
        this.merge(_key, offer[_key] as IsConfig)
      })
    })
  }

  icon(userConfig: UserConfig): IconComponentObject | undefined {
    if (this.iconConfig) {
      const config = this.cloneUserConfigAndOverride(userConfig, 'icon')
      const result = new IconComponentModel(config)
      return result.generate()
    }
  }

  box(userConfig: UserConfig): BoxComponentObject | undefined {
    if (this.boxConfig) {
      const config = this.cloneUserConfigAndOverride(userConfig, 'box')
      const result = new BoxComponentModel(config)
      return result.generate()
    }
  }

  button(userConfig: UserConfig): ButtonComponentObject | undefined {
    if (this.boxConfig) {
      const config = this.cloneUserConfigAndOverride(userConfig, 'button')
      const result = new ButtonComponentModel(config)
      return result.generate()
    }
  }

  container(userConfig: UserConfig): ContainerComponentObject | undefined {
    if (this.containerConfig) {
      const config = this.cloneUserConfigAndOverride(userConfig, 'container')
      const result = new ContainerComponentModel(config)
      return result.generate()
    }
  }

  header(userConfig: UserConfig): HeaderComponentObject | undefined {
    if (this.headerConfig) {
      const config = this.cloneUserConfigAndOverride(userConfig, 'header')
      const result = new HeaderComponentModel(config)
      return result.generate()
    }
  }

  sidebar(userConfig: UserConfig): SidebarComponentObject | undefined {
    if (this.sidebarConfig) {
      const config = this.cloneUserConfigAndOverride(userConfig, 'sidebar')
      const result = new SidebarComponentModel(config)
      return result.generate()
    }
  }

  numberBudge(userConfig: UserConfig): NumberBudgeComponentObject | undefined {
    if (this.numberBudgeConfig) {
      const config = this.cloneUserConfigAndOverride(userConfig, 'numberBudge')
      const result = new NumberBudgeComponentModel(config)
      return result.generate()
    }
  }

  avatar(userConfig: UserConfig): AvatarComponentObject | undefined {
    if (this.avatarConfig) {
      const config = this.cloneUserConfigAndOverride(userConfig, 'avatar')
      const result = new AvatarComponentModel(config)
      return result.generate()
    }
  }

  private cloneUserConfigAndOverride(
    userConfig: UserConfig,
    configName: DependencyOfferName
  ): UserConfig {
    const localConfigName = `${configName}Config` as LocalDependencyOfferName
    const config = cloneDeep(userConfig)
    config[configName] = this[localConfigName]
    return config
  }

  private merge(configName: DependencyOfferName, config: IsConfig) {
    const localConfigName = `${configName}Config` as LocalDependencyOfferName
    this[localConfigName] = this[localConfigName]
      ? config
      : deepmerge(this[localConfigName], config)
  }
}
