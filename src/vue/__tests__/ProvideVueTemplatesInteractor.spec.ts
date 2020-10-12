import path from 'path'
import ProvideVueTemplatesInteractor from '@src/vue/ProvideVueTemplatesInteractor'
import { TemplateList } from '@theme/types/TemplateList'
import VueButtonComponent from '@src/vue/components/Button/VueButtonComponent'
import UBConfig from '@theme/config/UBConfig'
import TemplateEjsRenderer from '@helper/TemplateRenderer/TemplateEjsRenderer'
import CssStyleManager from '@helper/StyleManager/CssStyleManager'
import ProvidedFsFileRepository from '@src/repositories/ProvidedFsFileRepository'
import VueBoxComponent from '@src/vue/components/Box/VueBoxComponent'

it('provide test', () => {
  const ubConfig = new UBConfig({
    global: {
      colors: {
        primary: 'red',
        secondary: '#fff',
        notification: 'rgba(0,0,0,0.4)',
        error: '#001100',
        baseFont: 'green'
      }
    },
    box: {
      styles: {
        test: {
          background: '#ccc'
        }
      },
      radius: 12
    },
    button: {
      colors: {
        primary: {
          fontColor: 'black',
          background: 'white',
          hover: {
            fontColor: 'white',
            background: 'black'
          }
        },
        secondary: {
          fontColor: 'blue',
          background: 'yellow',
          hover: {
            fontColor: 'yellow',
            background: 'blue'
          }
        }
      },
      sizes: {
        medium: {
          fontSize: 15,
          default: true,
          height: 24
        }
      },
      bordered: {
        width: 2
      }
    }
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
