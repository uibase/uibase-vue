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
  console.log('=============first=============')
  const paths = await provider.provide(config)
  console.log(paths)
  config.box = {
    styles: {
      primary: {
        background: '$primary',
        fontColor: '$baseFont'
      },
      secondary: {
        background: '$notification',
        fontColor: '$error'
      },
      third: {
        background: '$secondary',
        fontColor: '$notification'
      }
    }
  }
  console.log('=============second=============')
  const path2 = await provider.provide(config)
  console.log(path2)
  console.log('=============third=============')
  delete config.box
  const path3 = await provider.provide(config)
  console.log(path3)
})
