import IProvidedFileRepository from 'src/repositories/IProvidedFileRepository'
import { TemplateList } from '@theme/types/TemplateList'
import { RenderedFilePath } from '@theme/types/RenderedFilePath'
import IProvideVueTemplatesUseCase from '@src/useCases/IProvideVueTemplatesUseCase'
import templateProvideRepositoryHandler from '@helper/templateProvideRepositoryHandler'

export default class ProvideVueTemplatesInteractor
  implements IProvideVueTemplatesUseCase {
  private readonly repository: IProvidedFileRepository
  private readonly templates: TemplateList
  private readonly pathToProvide: string

  constructor(
    pathToProvide: string,
    repository: IProvidedFileRepository,
    templates: TemplateList
  ) {
    this.pathToProvide = pathToProvide
    this.repository = repository
    this.templates = templates
  }
  async handle(): Promise<RenderedFilePath[]> {
    return templateProvideRepositoryHandler(
      this.pathToProvide,
      this.templates,
      this.repository,
      'add'
    )
  }
}
