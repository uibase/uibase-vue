import ITemplateRenderer from '@theme/helpers/ITemplateRenderer'
import { TemplateComponent } from '@theme/types/TemplateComponent'
import ComponentObject from '@theme/config/ComponentObject'
import IBoxComponent from '@theme/components/IBoxComponent'
import boxTemplate from './box.ejs'
import boxTitleTemplate from './box.ejs'
import { BoxComponentObject } from '@theme/types/components/Box'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier')

export default class VueBoxComponent implements IBoxComponent {
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
    if (this.componentObject.box()) {
      const box = await this.templateRenderer.render(
        boxTemplate,
        this.componentObject.box() as BoxComponentObject
      )
      const boxTitle = await this.templateRenderer.render(
        boxTitleTemplate,
        this.componentObject.box() as BoxComponentObject
      )
      return [
        {
          fileName: ['', 'BaseBox.vue'],
          fileType: 'vue',
          componentStr: prettier.format(box, { parser: 'vue' })
        },
        {
          fileName: ['', 'BaseBoxTitle.vue'],
          fileType: 'vue',
          componentStr: prettier.format(boxTitle, { parser: 'vue' })
        }
      ]
    } else {
      throw `templateCreationError: box config has not be found.`
    }
  }
}
