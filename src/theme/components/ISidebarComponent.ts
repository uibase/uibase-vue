import { TemplateComponent } from '@theme/types/TemplateComponent'

export default interface ISidebarComponent {
  generate(): Promise<TemplateComponent[]>
}
