import { TemplateComponent } from '@theme/types/TemplateComponent'

export default interface IButtonComponent {
  generate(): Promise<TemplateComponent[]>
}
