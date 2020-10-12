import { TemplateList } from '@theme/types/TemplateList'
import { ComponentFileType } from '@theme/types/ComponentFileType'
import UBConfig from '@theme/config/UBConfig'

export default interface ITemplateFactory {
  generate(
    themeConfig: UBConfig,
    componentFileType: ComponentFileType
  ): TemplateList
}
