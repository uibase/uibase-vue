import { ComponentTypeName } from '@theme/types/ComponentTypeName'
import { ThemeComponent } from '@theme/types/ThemeComponent'

export type TemplateList = {
  [key in ComponentTypeName]?: ThemeComponent
}
