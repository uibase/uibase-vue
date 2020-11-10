import UserConfig from '@theme/types/UserConfig'
import { IconComponentObject } from '@theme/types/components/Icon'
import { SidebarComponentObject } from '@theme/types/components/Sidebar'
import { HeaderComponentObject } from '@theme/types/components/Header'
import { ContainerComponentObject } from '@theme/types/components/Container'
import { ButtonComponentObject } from '@theme/types/components/Button'
import { BoxComponentObject } from '@theme/types/components/Box'
import IconComponentModel from '@theme/config/IconComponentModel'
import BoxComponentModel from '@theme/config/BoxComponentModel'
import ButtonComponentModel from '@theme/config/ButtonComponentModel'
import ContainerComponentModel from '@theme/config/ContainerComponentModel'
import HeaderComponentModel from '@theme/config/HeaderComponentModel'
import SidebarComponentModel from '@theme/config/SidebarComponentModel'
import NumberBudgeComponentModel from '@theme/config/NumberBudgeComponentModel'
import DependencyProvider from '@theme/config/DependencyProvider'
import DependencyOffer from '@theme/types/DependencyOffers'
import { NumberBudgeComponentObject } from '@theme/types/components/NumberBudge'
import AvatarComponentModel from '@theme/config/AvatarComponentModel'
import { AvatarComponentObject } from '@theme/types/components/Avatar'

export default class ComponentObject {
  private userConfig: UserConfig
  private readonly iconModel: IconComponentModel | null
  private readonly boxModel: BoxComponentModel | null
  private readonly buttonModel: ButtonComponentModel | null
  private readonly containerModel: ContainerComponentModel | null
  private readonly headerModel: HeaderComponentModel | null
  private readonly sidebarModel: SidebarComponentModel | null
  private readonly numberBudgeModel: NumberBudgeComponentModel | null
  private readonly avatarModel: AvatarComponentModel | null
  private dependencyProvider: DependencyProvider

  constructor(userConfig: UserConfig) {
    if (!userConfig.global) throw `ui config Error:: global config is required.`
    this.userConfig = userConfig
    this.iconModel = this.userConfig.icon
      ? new IconComponentModel(userConfig)
      : null
    this.boxModel = this.userConfig.box
      ? new BoxComponentModel(userConfig)
      : null
    this.buttonModel = this.userConfig.button
      ? new ButtonComponentModel(userConfig)
      : null
    this.containerModel = this.userConfig.container
      ? new ContainerComponentModel(userConfig)
      : null
    this.headerModel = this.userConfig.header
      ? new HeaderComponentModel(userConfig)
      : null
    this.sidebarModel = this.userConfig.sidebar
      ? new SidebarComponentModel(userConfig)
      : null
    this.numberBudgeModel = this.userConfig.numberBudge
      ? new NumberBudgeComponentModel(userConfig)
      : null
    this.avatarModel = this.userConfig.avatar
      ? new AvatarComponentModel(userConfig)
      : null
    // setUp Dependencies
    const offers = [] as DependencyOffer[]
    if (this.iconModel)
      offers.push(this.iconModel.offerDependenciesToProvider())
    if (this.boxModel) offers.push(this.boxModel.offerDependenciesToProvider())
    if (this.buttonModel)
      offers.push(this.buttonModel.offerDependenciesToProvider())
    if (this.containerModel)
      offers.push(this.containerModel.offerDependenciesToProvider())
    if (this.headerModel)
      offers.push(this.headerModel.offerDependenciesToProvider())
    if (this.sidebarModel)
      offers.push(this.sidebarModel.offerDependenciesToProvider())
    if (this.numberBudgeModel)
      offers.push(this.numberBudgeModel.offerDependenciesToProvider())
    if (this.avatarModel)
      offers.push(this.avatarModel.offerDependenciesToProvider())

    this.dependencyProvider = new DependencyProvider(...offers)
  }

  box(): BoxComponentObject | undefined {
    return (
      this.boxModel?.generate() || this.dependencyProvider.box(this.userConfig)
    )
  }

  button(): ButtonComponentObject | undefined {
    return (
      this.buttonModel?.generate() ||
      this.dependencyProvider.button(this.userConfig)
    )
  }

  container(): ContainerComponentObject | undefined {
    return (
      this.containerModel?.generate() ||
      this.dependencyProvider.container(this.userConfig)
    )
  }

  header(): HeaderComponentObject | undefined {
    return (
      this.headerModel?.generate() ||
      this.dependencyProvider.header(this.userConfig)
    )
  }

  sidebar(): SidebarComponentObject | undefined {
    return (
      this.sidebarModel?.generate() ||
      this.dependencyProvider.sidebar(this.userConfig)
    )
  }

  icon(): IconComponentObject | undefined {
    return (
      this.iconModel?.generate() ||
      this.dependencyProvider.icon(this.userConfig)
    )
  }

  numberBudge(): NumberBudgeComponentObject | undefined {
    return (
      this.numberBudgeModel?.generate() ||
      this.dependencyProvider.numberBudge(this.userConfig)
    )
  }

  avatar(): AvatarComponentObject | undefined {
    return (
      this.avatarModel?.generate() ||
      this.dependencyProvider.avatar(this.userConfig)
    )
  }
}
