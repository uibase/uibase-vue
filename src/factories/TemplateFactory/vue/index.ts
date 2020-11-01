import { TemplateList } from '@theme/types/TemplateList'
import VueButtonComponent from '@src/vue/components/Button/VueButtonComponent'
import ITemplateRenderer from '@theme/helpers/ITemplateRenderer'
import VueBoxComponent from '@src/vue/components/Box/VueBoxComponent'
import ComponentObject from '@theme/config/ComponentObject'

export default function(
  componentObject: ComponentObject,
  templateRenderer: ITemplateRenderer
): TemplateList {
  try {
    const templateList = {} as TemplateList
    const button = componentObject.button()
    const box = componentObject.box()
    // const sidebar = componentObject.sidebar()
    // const header = componentObject.header()
    // const container = componentObject.container()
    // const icons = componentObject.icons()

    if (button)
      templateList.button = new VueButtonComponent(
        componentObject,
        templateRenderer
      )
    if (box)
      templateList.box = new VueBoxComponent(componentObject, templateRenderer)
    return templateList as TemplateList
  } catch (e) {
    throw e
  }
}
