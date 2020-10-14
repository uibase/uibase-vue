import path from 'path'
import ProvideVueTemplatesInteractor from '@src/vue/ProvideVueTemplatesInteractor'
import { TemplateList } from '@theme/types/TemplateList'
import VueButtonComponent from '@src/vue/components/Button/VueButtonComponent'
import UBConfig from '@theme/config/UBConfig'
import TemplateEjsRenderer from '@helper/TemplateRenderer/TemplateEjsRenderer'
import CssStyleManager from '@helper/StyleManager/CssStyleManager'
import ProvidedFsFileRepository from '@src/repositories/ProvidedFsFileRepository'
import VueBoxComponent from '@src/vue/components/Box/VueBoxComponent'
import defaultConfig from '@util/defaultConfig'

it('provide test', () => {
  const ubConfig = new UBConfig({
    global: defaultConfig.global,
    button: defaultConfig.button
  })
  const templateRenderer = new TemplateEjsRenderer(new CssStyleManager())
  const templateList: TemplateList = {
    button: new VueButtonComponent(ubConfig, templateRenderer),
    box: new VueBoxComponent(ubConfig, templateRenderer)
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
