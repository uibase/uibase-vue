import defaultConfig from '@src/utils/defaultConfig'
import BoxComponentModel from '@theme/config/BoxComponentModel'
test('BoxComponentModel', () => {
  const boxConfig = { global: defaultConfig.global, box: defaultConfig.box }
  const box = new BoxComponentModel(boxConfig)
  console.log(box.generate())
})
