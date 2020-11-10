import { TemplateList } from '@theme/types/TemplateList'
import ComponentObject from '@theme/config/ComponentObject'

export default interface ITemplateFactory {
  generate(componentObject: ComponentObject): TemplateList
}
