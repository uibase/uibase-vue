import UBConfig from '@theme/config/UBConfig'
import ThemeConfig from '@uiConfig/ThemeConfig'
import defaultConfig from '@util/defaultConfig/index'

test('UBConfig', () => {
  const config: ThemeConfig = defaultConfig
  const uiConfig = new UBConfig(config)
  console.log(uiConfig.box())
})
