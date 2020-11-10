import TemplateEjsRenderer from '@helper/TemplateRenderer/TemplateEjsRenderer'
import CssStyleManager from '@helper/StyleManager/CssStyleManager'
import defaultConfig from '@util/defaultConfig'
import ComponentObject from '@theme/config/ComponentObject'
import VueAvatarComponent from '@src/vue/components/Avatar/VueAvatarComponent'

it('Vue Avatar Template', () => {
  const templateRenderer = new TemplateEjsRenderer(new CssStyleManager())
  const componentObject = new ComponentObject({
    global: defaultConfig.global,
    avatar: defaultConfig.avatar
  })
  const button = new VueAvatarComponent(componentObject, templateRenderer)
  button.generate().then((templateComponents) => {
    console.log('done')
    console.log(templateComponents[0].componentStr)
  })
})
