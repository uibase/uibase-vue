import UBConfig from '@theme/config/UBConfig'
import ThemeConfig from '@uiConfig/ThemeConfig'

test('UBConfig', () => {
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
    box: {
      styles: {
        primary: {
          background: '$primary refefefe',
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
  }
  const uiConfig = new UBConfig(config)
  console.log(uiConfig.box())
})
