import path from 'path'
import ProvideVueTemplatesInteractor from '@src/vue/ProvideVueTemplatesInteractor'
import { TemplateList } from '@theme/types/TemplateList'
import VueButtonComponent from '@src/vue/components/Button/VueButtonComponent'
import TemplateEjsRenderer from '@helper/TemplateRenderer/TemplateEjsRenderer'
import CssStyleManager from '@helper/StyleManager/CssStyleManager'
import ProvidedFsFileRepository from '@src/repositories/ProvidedFsFileRepository'
import VueBoxComponent from '@src/vue/components/Box/VueBoxComponent'
import defaultConfig from '@util/defaultConfig'
import ComponentObject from '@theme/config/ComponentObject'

it('provide test', () => {
  const componentObject = new ComponentObject({
    global: defaultConfig.global,
    button: defaultConfig.button,
    box: defaultConfig.box
  })
  const templateRenderer = new TemplateEjsRenderer(new CssStyleManager())
  const templateList: TemplateList = {
    button: new VueButtonComponent(componentObject, templateRenderer),
    box: new VueBoxComponent(componentObject, templateRenderer)
  }
  const pathToProvide = path.resolve(__dirname, './.testUi')
  console.log(pathToProvide)
  const provider = new ProvideVueTemplatesInteractor(
    pathToProvide,
    new ProvidedFsFileRepository(),
    templateList
  )
  provider.handle().then((paths) => {
    console.log(paths)
  })
})
