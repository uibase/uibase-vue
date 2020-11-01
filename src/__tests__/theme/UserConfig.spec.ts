import defaultConfig from '@util/defaultConfig/index'
import UserConfig from '@theme/types/UserConfig'
import ComponentObject from '@theme/config/ComponentObject'

test('UserConfig', () => {
  const config: UserConfig = defaultConfig
  const componentObject = new ComponentObject(config)
  console.log(componentObject.box())
})
