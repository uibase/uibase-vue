import { RenderedFilePath } from '@theme/types/RenderedFilePath'

export default interface IRenderPluginImporter {
  render(dir: string, paths: RenderedFilePath[]): Promise<string>
}
