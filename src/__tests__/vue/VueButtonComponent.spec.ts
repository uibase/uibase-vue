import VueButtonComponent from '@src/vue/components/Button/VueButtonComponent'
import TemplateEjsRenderer from '@helper/TemplateRenderer/TemplateEjsRenderer'
import CssStyleManager from '@helper/StyleManager/CssStyleManager'
import defaultConfig from '@util/defaultConfig'
import ComponentObject from '@theme/config/ComponentObject'

it('Vue Button Template', () => {
  const templateRenderer = new TemplateEjsRenderer(new CssStyleManager())
  const componentObject = new ComponentObject({
    global: defaultConfig.global,
    button: defaultConfig.button
  })
  const button = new VueButtonComponent(componentObject, templateRenderer)
  button.generate().then((templateComponents) => {
    console.log('done')
    console.log(templateComponents[0].componentStr)
  })
})
