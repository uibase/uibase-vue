import { TemplateList } from '@theme/types/TemplateList'
import VueButtonComponent from '@src/vue/components/Button/VueButtonComponent'
import ITemplateRenderer from '@theme/helpers/ITemplateRenderer'
import VueBoxComponent from '@src/vue/components/Box/VueBoxComponent'
import ComponentObject from '@theme/config/ComponentObject'
import VueIconComponent from '@src/vue/components/Icon/VueIconComponent'
import VueHeaderComponent from '@src/vue/components/Header/VueHeaderComponent'
import VueAvatarComponent from '@src/vue/components/Avatar/VueAvatarComponent'
import VueNumberBudgeComponent from '@src/vue/components/NumberBudge/VueNumberBudgeComponent'
import VueSidebarComponent from '@src/vue/components/Sidebar/VueSidebarComponent'
import { RouterName } from '@factory/ComponentProviderFactory/vue/VueComponentProvider'

export default function(
  componentObject: ComponentObject,
  router: RouterName,
  templateRenderer: ITemplateRenderer
): TemplateList {
  try {
    const templateList = {} as TemplateList
    const button = componentObject.button()
    const box = componentObject.box()
    const sidebar = componentObject.sidebar()
    const header = componentObject.header()
    const icons = componentObject.icon()
    const avatar = componentObject.avatar()
    const numberBudge = componentObject.numberBudge()
    // const container = componentObject.container()

    if (button)
      templateList.button = new VueButtonComponent(
        componentObject,
        templateRenderer
      )
    if (box)
      templateList.box = new VueBoxComponent(componentObject, templateRenderer)
    if (icons)
      templateList.icon = new VueIconComponent(
        componentObject,
        templateRenderer
      )
    if (header)
      templateList.header = new VueHeaderComponent(
        componentObject,
        templateRenderer
      )
    if (sidebar)
      templateList.sidebar = new VueSidebarComponent(
        componentObject,
        router,
        templateRenderer
      )
    if (numberBudge)
      templateList.numberBudge = new VueNumberBudgeComponent(
        componentObject,
        templateRenderer
      )
    if (avatar)
      templateList.avatar = new VueAvatarComponent(
        componentObject,
        templateRenderer
      )
    return templateList as TemplateList
  } catch (e) {
    throw e
  }
}
