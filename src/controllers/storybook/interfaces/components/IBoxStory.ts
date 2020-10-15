import { TemplateComponent } from '@theme/types/TemplateComponent'
import IBoxComponent from '@theme/components/IBoxComponent'

export default interface IBoxStory extends IBoxComponent {
  generate(): Promise<TemplateComponent[]>
}
