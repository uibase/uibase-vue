import { TemplateComponent } from '@theme/types/TemplateComponent'

export default interface IHeaderComponent {
  generate(): Promise<TemplateComponent[]>
}
