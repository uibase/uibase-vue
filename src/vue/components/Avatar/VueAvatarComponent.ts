import ITemplateRenderer from '@theme/helpers/ITemplateRenderer'
import { TemplateComponent } from '@theme/types/TemplateComponent'
import ComponentObjects from '@theme/config/ComponentObject'
import avatarTemplate from './avatar.ejs'
import IAvatarComponent from '@theme/components/IAvatarComponent'
import { AvatarComponentObject } from '@theme/types/components/Avatar'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier')

export default class VueAvatarComponent implements IAvatarComponent {
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
    if (this.componentObjects.avatar()) {
      return this.templateRenderer
        .render(
          avatarTemplate,
          this.componentObjects.avatar() as AvatarComponentObject
        )
        .then((str) => {
          return [
            {
              fileName: ['', 'BaseAvatar.vue'],
              fileType: 'vue',
              componentStr: prettier.format(str, { parser: 'vue' })
            }
          ]
        })
    } else {
      throw `templateCreationError: avatar config has not be found.`
    }
  }
}
