import VueButtonComponent from './VueButtonComponent'
import Button from '@uiConfig/Button'
import Global from '@uiConfig/Global'

test('render button vue component', () => {
  const buttonConfig: Button = {
    colors: {
      primary: {
        background: '$primary',
        fontColor: '$baseFont',
        hover: {
          background: {
            color: '$secondary'
          },
          fontColor: '$white',
          opacity: 0.8
        }
      },
      secondary: {
        background: '$secondary',
        fontColor: '$white',
        hover: {
          background: {
            color: '$primary'
          },
          fontColor: '$baseFont',
          opacity: 0.8
        }
      }
    },
    sizes: {
      medium: {
        fontSize: 12,
        height: 38,
        default: true
      },
      small: {
        fontSize: 11,
        height: 30
      },
      large: {
        fontSize: 15,
        height: 46
      }
    },
    bordered: {
      width: 5
    }
  }
  const globalConfig: Global = {
    colors: {
      baseFont: 'black',
      error: 'red',
      notification: 'yellow',
      primary: 'green',
      secondary: 'blue',
      white: 'white'
    }
  }
  const button = new VueButtonComponent(buttonConfig, globalConfig)
  button.generate().then((string) => console.log(string))
})
