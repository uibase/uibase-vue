import IButtonComponent from '@theme/components/IButtonComponent'
import ITemplateRenderer from '@theme/helpers/ITemplateRenderer'
import { TemplateComponent } from '@theme/types/TemplateComponent'
import ComponentObjects from '@theme/config/ComponentObject'
import buttonTemplate from './button.ejs'
import { ButtonComponentObject } from '@theme/types/components/Button'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier')

export default class VueButtonComponent implements IButtonComponent {
  private readonly componentObjects: ComponentObjects
  private templateRenderer: ITemplateRenderer

  constructor(
    componentObjects: ComponentObjects,
    templateRenderer: ITemplateRenderer
  ) {
    this.componentObjects = componentObjects
    this.templateRenderer = templateRenderer
  }

  generate(): Promise<TemplateComponent[]> {
    if (this.componentObjects.button()) {
      return this.templateRenderer
        .render(
          buttonTemplate,
          this.componentObjects.button() as ButtonComponentObject
        )
        .then((str) => {
          return [
            {
              fileName: ['', 'BaseButton.vue'],
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
