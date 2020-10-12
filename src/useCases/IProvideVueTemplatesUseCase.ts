import { RenderedFilePath } from '@theme/types/RenderedFilePath'

export default interface IProvideVueTemplatesUseCase {
  handle(): Promise<RenderedFilePath[]>
}
