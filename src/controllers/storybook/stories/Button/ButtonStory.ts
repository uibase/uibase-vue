import IButtonStory from 'src/controllers/storybook/interfaces/components/IButtonStory'
import IStorybookRenderer from 'src/controllers/storybook/interfaces/IStorybookRenderer'
import buttonStoryTemplate from './Button.stories.ejs'
import { TemplateComponent } from '@theme/types/TemplateComponent'
import { ComponentFileType } from '@theme/types/ComponentFileType'
import ComponentObject from '@theme/config/ComponentObject'
import { IsComponentObject } from '@theme/types/IsComponentObject'

export default class ButtonStory implements IButtonStory {
  private config: ComponentObject
  private renderer: IStorybookRenderer
  private type: ComponentFileType
  constructor(
    config: ComponentObject,
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
        this.config.button() as IsComponentObject
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
