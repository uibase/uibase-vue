import path from 'path'
import defaultConfig from '@util/defaultConfig/index'
import UserConfig from '@theme/types/UserConfig'
import ComponentObject from '@theme/config/ComponentObject'

test('UserConfig', () => {
  const config: UserConfig = defaultConfig
  config.icon = {
    paths: path.resolve(__dirname, '../../assets/icons'),
    defaultColors: true,
    colors: {}
  }
  const componentObject = new ComponentObject(config)
  console.log(componentObject.icon())
})
