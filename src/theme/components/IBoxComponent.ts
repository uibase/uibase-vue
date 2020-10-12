import { TemplateComponent } from '@theme/types/TemplateComponent'

export default interface IBoxComponent {
  generate(): Promise<TemplateComponent[]>
}
