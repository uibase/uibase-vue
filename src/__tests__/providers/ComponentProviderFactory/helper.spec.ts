import { componentNamePath, findConfigDiff } from '@src/providers/helper'
import defaultConfig from '@util/defaultConfig'
import UserConfig from '@theme/types/UserConfig'

test('findConfigDiff', () => {
  const newConfig: UserConfig = {
    global: defaultConfig.global
  }
  const prevConfig: UserConfig = {
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
