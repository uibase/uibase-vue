import VueButtonComponent from '@src/vue/components/Button/VueButtonComponent'
import TemplateEjsRenderer from '@helper/TemplateRenderer/TemplateEjsRenderer'
import CssStyleManager from '@helper/StyleManager/CssStyleManager'
import UBConfig from '@theme/config/UBConfig'
import defaultConfig from '@util/defaultConfig'

it('Vue Button Template', () => {
  const templateRenderer = new TemplateEjsRenderer(new CssStyleManager())
  const ubConfig = new UBConfig({
    global: defaultConfig.global,
    button: defaultConfig.button
  })
  const button = new VueButtonComponent(ubConfig, templateRenderer)
  button.generate().then((templateComponents) => {
    console.log('done')
    console.log(templateComponents[0].componentStr)
  })
})
