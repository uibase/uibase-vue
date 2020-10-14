import {
  componentNamePath,
  findConfigDiff
} from '@factory/ComponentProviderFactory/helper'
import defaultConfig from '@util/defaultConfig'
import ThemeConfig from '@uiConfig/ThemeConfig'

test('findConfigDiff', () => {
  const newConfig: ThemeConfig = {
    global: defaultConfig.global
  }
  const prevConfig: ThemeConfig = {
    global: defaultConfig.global,
    button: defaultConfig.button
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
