import ThemeConfig from '@uiConfig/ThemeConfig'
import { RenderedFilePath } from '@theme/types/RenderedFilePath'

interface IComponentProvider {
  provide(themConfig: ThemeConfig): Promise<RenderedFilePath[]>
}

export default IComponentProvider
