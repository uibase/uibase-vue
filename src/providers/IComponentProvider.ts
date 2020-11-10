import { RenderedFilePath } from '@theme/types/RenderedFilePath'
import UserConfig from '@theme/types/UserConfig'

interface IComponentProvider {
  provide(userConfig: UserConfig): Promise<RenderedFilePath[]>
}

export default IComponentProvider
