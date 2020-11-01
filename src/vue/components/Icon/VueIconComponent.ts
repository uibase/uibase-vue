import IIconComponent from '@theme/components/IIconComponent'
import { TemplateComponent } from '@theme/types/TemplateComponent'
import ComponentObject from '@theme/config/ComponentObject'
import ITemplateRenderer from '@theme/helpers/ITemplateRenderer'
import IconTemplate from './icon.ejs'
import { IconComponentObject } from '@theme/types/components/Icon'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier')

class VueIconComponent implements IIconComponent {
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
    if (this.componentObject.icons()) {
      const icons = await this.templateRenderer.render(
        IconTemplate,
        this.componentObject.icons() as IconComponentObject
      )
      return [
        {
          fileName: ['', 'Icon.vue'],
          fileType: 'vue',
          componentStr: prettier.format(icons, { parser: 'vue' })
        }
      ]
    } else {
      throw `templateCreationError: icons config has not be found.`
    }
  }
}
