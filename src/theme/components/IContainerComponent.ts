import { TemplateComponent } from '@theme/types/TemplateComponent'

export default interface IContainerComponent {
  generate(): Promise<TemplateComponent[]>

}
