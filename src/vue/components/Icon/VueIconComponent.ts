import IIconComponent from '@theme/components/IIconComponent'
import { TemplateComponent } from '@theme/types/TemplateComponent'
import ComponentObject from '@theme/config/ComponentObject'
import ITemplateRenderer from '@theme/helpers/ITemplateRenderer'
import IconTemplate from './icon.ejs'
import IconXmarkTemplate from './icon-ubXmark.ejs'
import IconArrowDownTemplate from './icon-ubArrowDown.ejs'
import { IconComponentObject } from '@theme/types/components/Icon'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier')

export default class VueIconComponent implements IIconComponent {
  private componentObject: ComponentObject
  private templateRenderer: ITemplateRenderer

  constructor(
    componentObject: ComponentObject,
    templateRenderer: ITemplateRenderer
  ) {
    this.componentObject = componentObject
    this.templateRenderer = templateRenderer
  }
  async generate(): Promise<TemplateComponent[]> {
    if (this.componentObject.icon()) {
      const iconObject = this.componentObject.icon() as IconComponentObject
      // add Default Icons
      const icons = await this.templateRenderer.render(IconTemplate, iconObject)
      const xmarkIcon = await this.templateRenderer.render(
        IconXmarkTemplate,
        iconObject
      )
      const arrowDownIcon = await this.templateRenderer.render(
        IconArrowDownTemplate,
        iconObject
      )
      return [
        {
          fileName: ['', 'BaseIcon.vue'],
          fileType: 'vue',
          componentStr: prettier.format(icons, { parser: 'vue' })
        },
        {
          fileName: ['', 'IconUbXmark.vue'],
          fileType: 'vue',
          componentStr: prettier.format(xmarkIcon, { parser: 'vue' })
        },
        {
          fileName: ['', 'IconUbArrowDown.vue'],
          fileType: 'vue',
          componentStr: prettier.format(arrowDownIcon, { parser: 'vue' })
        }
      ]
    } else {
      throw `templateCreationError: icons config has not be found.`
    }
  }
}
