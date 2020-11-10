import { TemplateComponent } from '@theme/types/TemplateComponent'

export default interface IAvatarComponent {
  generate(): Promise<TemplateComponent[]>
}
