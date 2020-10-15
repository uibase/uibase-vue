import { TemplateComponent } from '@theme/types/TemplateComponent'
import IButtonComponent from '@theme/components/IButtonComponent'

export default interface IButtonStory extends IButtonComponent {
  generate(): Promise<TemplateComponent[]>
}
