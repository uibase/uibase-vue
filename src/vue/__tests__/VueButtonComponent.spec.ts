import VueButtonComponent from '@src/vue/components/Button/VueButtonComponent'
import TemplateEjsRenderer from '@helper/TemplateRenderer/TemplateEjsRenderer'
import CssStyleManager from '@helper/StyleManager/CssStyleManager'
import UBConfig from '@theme/config/UBConfig'

it('Vue Button Template', () => {
  const templateRenderer = new TemplateEjsRenderer(new CssStyleManager())
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
  const button = new VueButtonComponent(ubConfig, templateRenderer)
  button.generate().then((templateComponents) => {
    console.log('done')
    console.log(templateComponents[0].componentStr)
  })
})
