import ITemplateFactory from '@src/providers/ITemplateFactory'
import createVueTemplateList from './createVueTemplateList'
import { TemplateList } from '@theme/types/TemplateList'
import TemplateEjsRenderer from '@helper/TemplateRenderer/TemplateEjsRenderer'
import CssStyleManager from '@helper/StyleManager/CssStyleManager'
import ComponentObject from '@theme/config/ComponentObject'
import { RouterName } from '@src/providers/vue/VueComponentProvider'

export default class TemplateVueFactory implements ITemplateFactory {
  private router: RouterName
  constructor(router: RouterName) {
    this.router = router
  }
  generate(componentObject: ComponentObject): TemplateList {
    const vueRenderer = new TemplateEjsRenderer(new CssStyleManager())
    return createVueTemplateList(componentObject, this.router, vueRenderer)
  }
}
