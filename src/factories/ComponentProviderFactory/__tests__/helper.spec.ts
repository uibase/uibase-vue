import {
  componentNamePath,
  findConfigDiff
} from '@factory/ComponentProviderFactory/helper/helper'
import ThemeConfig from '@uiConfig/ThemeConfig'

test('findConfigDiff', () => {
  const newConfig: ThemeConfig = {
    global: {
      colors: {
        primary: 'red',
        secondary: 'green',
        baseFont: 'black',
        error: 'yellow',
        notification: 'purple'
      }
    }
  }
  const prevConfig: ThemeConfig = {
    global: {
      colors: {
        primary: 'red',
        secondary: 'green',
        baseFont: 'black',
        error: 'yellow',
        notification: 'red'
      }
    },
    button: {
      colors: {
        primary: {
          fontColor: 'white',
          background: 'black',
          hover: {
            fontColor: 'black',
            background: 'white'
          }
        },
        secondary: {
          fontColor: 'white',
          background: 'black',
          hover: {
            fontColor: 'black',
            background: 'white'
          }
        }
      },
      sizes: {
        small: {
          default: true,
          fontSize: 12,
          height: 30
        }
      },
      bordered: {
        width: 3
      }
    }
  }
  const result = findConfigDiff(newConfig, prevConfig)
  console.log(result)
})

it('componentNamePath:: Success', () => {
  const [name, path] = componentNamePath(
    '/User/bin/node_modules/test/.vuie/Box.vue',
    'vue'
  )
  console.log(name)
  expect(name).toStrictEqual('Box')
})

it('componentNamePath:: Error', () => {
  expect(() => {
    componentNamePath('/User/bin/node_modules/test/.vuie/Box_Vue.vue', 'vue')
  }).toThrow()
})
