import { TemplateComponent } from '@theme/types/TemplateComponent'
import ComponentObject from '@theme/config/ComponentObject'
import ITemplateRenderer from '@theme/helpers/ITemplateRenderer'
import NumberBudgeTemplate from './numberBudge.ejs'
import { IconComponentObject } from '@theme/types/components/Icon'
import INumberBudgeComponent from '@theme/components/INumberBudgeComponent'
import { NumberBudgeComponentObject } from 'src/theme/types/components/NumberBudge'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier')

export default class VueNumberBudgeComponent implements INumberBudgeComponent {
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
    if (this.componentObject.numberBudge()) {
      const numberBudgeObject = this.componentObject.numberBudge() as NumberBudgeComponentObject
      // add Default Icons
      const numberBudge = await this.templateRenderer.render(
        NumberBudgeTemplate,
        numberBudgeObject
      )
      return [
        {
          fileName: ['', 'BaseNumberBudge.vue'],
          fileType: 'vue',
          componentStr: prettier.format(numberBudge, { parser: 'vue' })
        }
      ]
    } else {
      throw `templateCreationError: icons config has not be found.`
    }
  }
}
