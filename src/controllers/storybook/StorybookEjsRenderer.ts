import IStorybookRenderer from 'src/controllers/storybook/interfaces/IStorybookRenderer'
import { StoryType } from '@src/controllers/storybook/types/StoryType'
import ejs from 'ejs'
import { IsComponentObject } from '@theme/types/IsComponentObject'

export default class StorybookEjsRenderer implements IStorybookRenderer {
  private options: {
    async: boolean
    context: {
      [key: string]: any
    }
  }
  constructor(type: StoryType, path: string) {
    this.options = {
      async: true,
      context: {
        type,
        path
      }
    }
  }
  render(templateString: string, config: IsComponentObject): Promise<string> {
    return (ejs.render(templateString, config, this.options) as Promise<
      string
    >).then((str) => {
      str = str.replace(/<script>/, '')
      str = str.replace(/<\/script>/, '')
      return str
    })
  }
}
