import { TemplateFileName } from '@theme/types/TemplateFileName'
import { ComponentFileType } from '@theme/types/ComponentFileType'

export type TemplateComponent = {
  fileName: TemplateFileName
  fileType: ComponentFileType
  componentStr: string
}
