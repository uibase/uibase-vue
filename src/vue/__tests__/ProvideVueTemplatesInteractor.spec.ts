import path from 'path'
import ProvideVueTemplatesInteractor from '@src/vue/ProvideVueTemplatesInteractor'
import { TemplateList } from '@theme/types/TemplateList'
import VueButtonComponent from '@src/vue/components/Button/VueButtonComponent'
import UBConfig from '@theme/config/UBConfig'
import TemplateEjsRenderer from '@helper/TemplateRenderer/TemplateEjsRenderer'
import CssStyleManager from '@helper/StyleManager/CssStyleManager'
import ProvidedFsFileRepository from '@src/repositories/ProvidedFsFileRepository'

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
  const templateList: TemplateList = {
    button: new VueButtonComponent(
      ubConfig,
      new TemplateEjsRenderer(new CssStyleManager())
    )
  }
  const provider = new ProvideVueTemplatesInteractor(
    path.resolve(__dirname, './.testUi'),
    new ProvidedFsFileRepository(),
    templateList
  )
})
