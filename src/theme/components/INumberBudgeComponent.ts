import { TemplateComponent } from '@theme/types/TemplateComponent'

export default interface INumberBudgeComponent {
  generate(): Promise<TemplateComponent[]>
}
