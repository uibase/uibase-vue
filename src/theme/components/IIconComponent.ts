import { TemplateComponent } from '@theme/types/TemplateComponent'

export default interface IIconComponent {
  generate(): Promise<TemplateComponent[]>
}
