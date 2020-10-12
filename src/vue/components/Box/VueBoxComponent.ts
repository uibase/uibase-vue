import path from 'path'
import ITemplateRenderer from '@theme/helpers/ITemplateRenderer'
import { TemplateComponent } from '@theme/types/TemplateComponent'
import UBConfig from '@theme/config/UBConfig'
import Box from '@uiConfig/Box'
import IBoxComponent from '@theme/components/IBoxComponent'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier')

export default class VueButtonComponent implements IBoxComponent {
  private readonly themeConfig: UBConfig
  private templateRenderer: ITemplateRenderer

  constructor(themeConfig: UBConfig, templateRenderer: ITemplateRenderer) {
    this.themeConfig = themeConfig
    this.templateRenderer = templateRenderer
  }

  async generate(): Promise<TemplateComponent[]> {
    if (this.themeConfig.box()) {
      const box = await this.templateRenderer.render(
        path.resolve(__dirname, './box.ejs'),
        this.themeConfig.box() as Box
      )
      const boxTitle = await this.templateRenderer.render(
        path.resolve(__dirname, './box-title.ejs'),
        this.themeConfig.box() as Box
      )
      return [
        {
          fileName: ['', 'Box.vue'],
          fileType: 'vue',
          componentStr: prettier.format(box, { parser: 'vue' })
        },
        {
          fileName: ['', 'BoxTitle.vue'],
          fileType: 'vue',
          componentStr: prettier.format(boxTitle, { parser: 'vue' })
        }
      ]
    } else {
      throw `templateCreationError: button config has not be found.`
    }
  }
}
