import Box from '@uiConfig/Box'
import ThemeConfig from '@uiConfig/ThemeConfig'
import { isConfig } from '@uiConfig/isConfig'
import Button from '@uiConfig/Button'
import IconPaths from '@uiConfig/Icon'
import Container from '@uiConfig/Container'
import Header from '@uiConfig/Header'
import Sidebar from '@uiConfig/Sidebar'

export default class UBConfig {
  private themeConfig: ThemeConfig

  constructor(themeConfig: ThemeConfig) {
    if (!themeConfig.global)
      throw `ui config Error:: global config is required.`
    this.themeConfig = themeConfig
  }

  private replaceGlobalVariables(config: isConfig): isConfig {
    let resultStr = JSON.stringify(config)
    const variables = {
      ...this.themeConfig.global.colors
    }
    Object.keys(variables).forEach((variable) => {
      const replaceString = new RegExp(`\\$${variable}`, 'gi')
      resultStr = resultStr.replace(replaceString, variables[variable])
    })
    return JSON.parse(resultStr) as isConfig
  }

  box(): Box | undefined {
    if (this.themeConfig.box) {
      return this.replaceGlobalVariables(this.themeConfig.box) as Box
    }
  }

  button(): Button | undefined {
    if (this.themeConfig.button) {
      return this.replaceGlobalVariables(this.themeConfig.button) as Button
    }
  }

  container(): Container | undefined {
    if (this.themeConfig.container) {
      return this.replaceGlobalVariables(
        this.themeConfig.container
      ) as Container
    }
  }

  header(): Header | undefined {
    if (this.themeConfig.header) {
      return this.replaceGlobalVariables(this.themeConfig.header) as Header
    }
  }

  sidebar(): Sidebar | undefined {
    if (this.themeConfig.sidebar) {
      return this.replaceGlobalVariables(this.themeConfig.sidebar) as Sidebar
    }
  }

  icons(): IconPaths | undefined {
    if (this.themeConfig.icons) {
      return this.themeConfig.icons as IconPaths
    }
  }
}
