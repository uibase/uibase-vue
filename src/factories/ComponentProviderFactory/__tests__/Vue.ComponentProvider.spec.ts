import path from 'path'
import VueComponentProvider from '@factory/ComponentProviderFactory/vue/VueComponentProvider'
import TemplateFactory from '@factory/TemplateFactory/TemplateFactory'
import ProvidedFsFileRepository from '@src/repositories/ProvidedFsFileRepository'
import ThemeConfig from '@uiConfig/ThemeConfig'

test('Vue Component Provider', async () => {
  const pathToProvide = path.join(__dirname, './.uiBase')
  const factory = new TemplateFactory()
  const repository = new ProvidedFsFileRepository()
  const provider = new VueComponentProvider(pathToProvide, factory, repository)
  const config: ThemeConfig = {
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
  }
  const paths = await provider.provide(config)
  console.log(paths)
})
