import { TemplateList } from '@theme/types/TemplateList'
import { ComponentFileType } from '@theme/types/ComponentFileType'
import ComponentObject from '@theme/config/ComponentObject'

export default interface ITemplateFactory {
  generate(
    componentObject: ComponentObject,
    componentFileType: ComponentFileType
  ): TemplateList
}
