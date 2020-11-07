import ITemplateRenderer from '@theme/helpers/ITemplateRenderer'
import { TemplateComponent } from '@theme/types/TemplateComponent'
import ComponentObject from '@theme/config/ComponentObject'
import headerTemplate from './header.ejs'
import { HeaderComponentObject } from '@theme/types/components/Header'
import IHeaderComponent from '@theme/components/IHeaderComponent'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier')

export default class VueHeaderComponent implements IHeaderComponent {
  private readonly componentObject: ComponentObject
  private templateRenderer: ITemplateRenderer

  constructor(
    componentObject: ComponentObject,
    templateRenderer: ITemplateRenderer
  ) {
    this.componentObject = componentObject
    this.templateRenderer = templateRenderer
  }

  async generate(): Promise<TemplateComponent[]> {
    if (this.componentObject.header()) {
      const box = await this.templateRenderer.render(
        headerTemplate,
        this.componentObject.header() as HeaderComponentObject
      )
      return [
        {
          fileName: ['', 'BaseHeader.vue'],
          fileType: 'vue',
          componentStr: prettier.format(box, { parser: 'vue' })
        }
      ]
    } else {
      throw `templateCreationError: header config has not be found.`
    }
  }
}
