import { ConfigProperties } from '@uiConfig/ConfigProperties'
import { isConfig } from '@uiConfig/isConfig'
import ejs from 'ejs'
import ITemplateRenderer from '@theme/helpers/ITemplateRenderer'
import IStyleManager from '@theme/helpers/IStyleManager'

export default class TemplateEjsRenderer implements ITemplateRenderer {
  private readonly options: {
    async: boolean
    context: {
      style: (properties: ConfigProperties) => string
    }
  }

  constructor(styleManager: IStyleManager<string>) {
    this.options = {
      context: {
        style: function(properties: ConfigProperties) {
          return styleManager.generate(properties)
        }
      },
      async: true
    }
  }

  render(templateFilePath: string, config: isConfig): Promise<string> {
    return ejs.render(templateFilePath, config, this.options) as Promise<string>
  }
}
