import UserConfig from '@theme/types/UserConfig'
import { IconComponentObject } from '@theme/types/components/Icon'
import { SidebarComponentObject } from '@theme/types/components/Sidebar'
import { HeaderComponentObject } from '@theme/types/components/Header'
import { ContainerComponentObject } from '@theme/types/components/Container'
import { ButtonComponentObject } from '@theme/types/components/Button'
import { BoxComponentObject } from '@theme/types/components/Box'
import { IsConfig } from '@theme/types/IsConfig'
import { listSvgFileNames } from '@helper/listSvgFileNames'

export default class ComponentObject {
  private userConfig: UserConfig

  constructor(userConfig: UserConfig) {
    if (!userConfig.global) throw `ui config Error:: global config is required.`
    this.userConfig = userConfig
  }

  private replaceGlobalVariables(config: IsConfig): IsConfig {
    let resultStr = JSON.stringify(config)
    const variables = {
      ...this.userConfig.global.colors
    }
    Object.keys(variables).forEach((variable) => {
      const replaceString = new RegExp(`\\$${variable}`, 'gi')
      resultStr = resultStr.replace(replaceString, variables[variable])
    })
    return JSON.parse(resultStr) as IsConfig
  }

  box(): BoxComponentObject | undefined {
    if (this.userConfig.box) {
      return this.replaceGlobalVariables(
        this.userConfig.box
      ) as BoxComponentObject
    }
  }

  button(): ButtonComponentObject | undefined {
    if (this.userConfig.button) {
      return this.replaceGlobalVariables(
        this.userConfig.button
      ) as ButtonComponentObject
    }
  }

  container(): ContainerComponentObject | undefined {
    if (this.userConfig.container) {
      return this.replaceGlobalVariables(
        this.userConfig.container
      ) as ContainerComponentObject
    }
  }

  header(): HeaderComponentObject | undefined {
    if (this.userConfig.header) {
      return this.replaceGlobalVariables(
        this.userConfig.header
      ) as HeaderComponentObject
    }
  }

  sidebar(): SidebarComponentObject | undefined {
    if (this.userConfig.sidebar) {
      return this.replaceGlobalVariables(
        this.userConfig.sidebar
      ) as SidebarComponentObject
    }
  }

  icon(): IconComponentObject | undefined {
    if (this.userConfig.icon) {
      const icons = { ...this.userConfig.icon }
      if (typeof icons.paths === 'string') {
        icons.paths = listSvgFileNames(icons.paths as string)
      }
      if (icons.defaultColors) {
        icons.colors = {
          ...icons.colors,
          ...this.userConfig.global.colors
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { defaultColors, ...result } = icons
      return result as IconComponentObject
    }
  }
}
