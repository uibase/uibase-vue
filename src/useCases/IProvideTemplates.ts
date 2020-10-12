import { RenderedFilePath } from '@theme/types/RenderedFilePath'

export default interface IProvideTemplates {
  handle(): Promise<RenderedFilePath[]>
}
