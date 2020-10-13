import IButtonComponent from '@theme/components/IButtonComponent'
import ITemplateRenderer from '@theme/helpers/ITemplateRenderer'
import { TemplateComponent } from '@theme/types/TemplateComponent'
import UBConfig from '@theme/config/UBConfig'
import Button from '@uiConfig/Button'
import buttonTemplate from './button.ejs'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier')

export default class VueButtonComponent implements IButtonComponent {
  private readonly themeConfig: UBConfig
  private templateRenderer: ITemplateRenderer

  constructor(themeConfig: UBConfig, templateRenderer: ITemplateRenderer) {
    this.themeConfig = themeConfig
    this.templateRenderer = templateRenderer
  }

  generate(): Promise<TemplateComponent[]> {
    if (this.themeConfig.button()) {
      return this.templateRenderer
        .render(buttonTemplate, this.themeConfig.button() as Button)
        .then((str) => {
          return [
            {
              fileName: ['', 'Button.vue'],
              fileType: 'vue',
              componentStr: prettier.format(str, { parser: 'vue' })
            }
          ]
        })
    } else {
      throw `templateCreationError: button config has not be found.`
    }
  }
}
