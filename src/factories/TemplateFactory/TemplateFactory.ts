import ITemplateFactory from '@factory/TemplateFactory/ITemplateFactory'
import createVueTemplateList from './vue/index'
import { TemplateList } from '@theme/types/TemplateList'
import TemplateEjsRenderer from '@helper/TemplateRenderer/TemplateEjsRenderer'
import CssStyleManager from '@helper/StyleManager/CssStyleManager'
import UBConfig from '@theme/config/UBConfig'

export default class TemplateFactory implements ITemplateFactory {
  generate(themeConfig: UBConfig, componentType: 'vue'): TemplateList {
    switch (componentType) {
      case 'vue':
        const vueRenderer = new TemplateEjsRenderer(new CssStyleManager())
        return createVueTemplateList(themeConfig, vueRenderer)
      default:
        throw `TemplateFactoryError: component type ${componentType} is note defined.`
    }
  }
}
