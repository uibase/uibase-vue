import { RenderedFilePath } from '@theme/types/RenderedFilePath'

export default interface IProvideReactTemplatesUseCase {
  handle(): Promise<RenderedFilePath[]>
}
