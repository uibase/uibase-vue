import { TemplateList } from '@theme/types/TemplateList'
import VueButtonComponent from '@src/vue/components/Button/VueButtonComponent'
import ITemplateRenderer from '@theme/helpers/ITemplateRenderer'
import UBConfig from '@theme/config/UBConfig'

export default function(
  themeConfig: UBConfig,
  templateRenderer: ITemplateRenderer
): TemplateList {
  try {
    const templateList = {} as TemplateList
    const button = themeConfig.button()
    // const box = themeConfig.box()
    // const sidebar = themeConfig.sidebar()
    // const header = themeConfig.header()
    // const container = themeConfig.container()
    // const icons = themeConfig.icons()

    if (button)
      templateList.button = new VueButtonComponent(
        themeConfig,
        templateRenderer
      )
    return templateList as TemplateList
  } catch (e) {
    throw e
  }
}
