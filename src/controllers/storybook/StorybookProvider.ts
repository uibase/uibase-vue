import { StoryType } from '@src/controllers/storybook/types/StoryType'
import { RenderedFilePath } from '@theme/types/RenderedFilePath'
import { TemplateList } from '@theme/types/TemplateList'
import ButtonStory from '@src/controllers/storybook/stories/Button/ButtonStory'
import IStorybookRenderer from '@src/controllers/storybook/interfaces/IStorybookRenderer'
import { ComponentFileType } from '@theme/types/ComponentFileType'
import templateProvideRepositoryHandler from '@helper/templateProvideRepositoryHandler'
import IProvidedFileRepository from '@src/repositories/IProvidedFileRepository'
import IComponentProvider from '@src/providers/IComponentProvider'
import UserConfig from '@theme/types/UserConfig'
import ComponentObject from '@theme/config/ComponentObject'

export default class StorybookProvider implements IComponentProvider {
  private readonly type: StoryType
  private readonly pathToProvide: string
  private readonly renderer: IStorybookRenderer
  private readonly repository: IProvidedFileRepository
  constructor(
    pathToProvide: string,
    type: StoryType,
    renderer: IStorybookRenderer,
    repository: IProvidedFileRepository
  ) {
    this.pathToProvide = pathToProvide
    this.type = type
    this.renderer = renderer
    this.repository = repository
  }

  async provide(userConfig: UserConfig): Promise<RenderedFilePath[]> {
    const config = new ComponentObject(userConfig)
    const templateList = this.generateThemeList(config)
    return templateProvideRepositoryHandler(
      this.pathToProvide,
      templateList,
      this.repository,
      'add'
    )
  }

  private generateThemeList(config: ComponentObject): TemplateList {
    const templateList = {} as TemplateList
    // button
    const button = config.button()
    if (button)
      templateList.button = new ButtonStory(
        config,
        this.renderer,
        this.type as ComponentFileType
      )

    return templateList
  }
}
