import IButtonStory from 'src/controllers/storybook/interfaces/components/IButtonStory'
import IStorybookRenderer from 'src/controllers/storybook/interfaces/IStorybookRenderer'
import buttonStoryTemplate from './Button.ejs'
import UBConfig from '@theme/config/UBConfig'
import { TemplateComponent } from '@theme/types/TemplateComponent'
import { isConfig } from '@uiConfig/isConfig'
import { ComponentFileType } from '@theme/types/ComponentFileType'

export default class ButtonStory implements IButtonStory {
  private config: UBConfig
  private renderer: IStorybookRenderer
  private type: ComponentFileType
  constructor(
    config: UBConfig,
    renderer: IStorybookRenderer,
    type: ComponentFileType
  ) {
    this.config = config
    this.renderer = renderer
    this.type = type
  }
  async generate(): Promise<TemplateComponent[]> {
    if (this.config.button()) {
      const str = await this.renderer.render(
        buttonStoryTemplate,
        this.config.button() as isConfig
      )
      return [
        {
          fileType: this.type,
          fileName: ['', 'BaseButton.stories.js'],
          componentStr: str
        }
      ]
    } else {
      throw `ButtonStoryError:: button config is not defined.`
    }
  }
}
