import path from 'path'
import VueComponentProvider from '@factory/ComponentProviderFactory/vue/VueComponentProvider'
import TemplateFactory from '@factory/TemplateFactory/TemplateFactory'
import ProvidedFsFileRepository from '@src/repositories/ProvidedFsFileRepository'
import defaultConfig from '@util/defaultConfig'
import UserConfig from '@theme/types/UserConfig'

test('Vue Component Provider', async () => {
  const pathToProvide = path.join(__dirname, './.uiBase')
  const factory = new TemplateFactory()
  const repository = new ProvidedFsFileRepository()
  const provider = new VueComponentProvider(
    pathToProvide,
    factory,
    'router-link',
    repository
  )
  const config: UserConfig = {
    global: defaultConfig.global,
    button: defaultConfig.button
  }
  console.log('=============first=============')
  const paths = await provider.provide(config)
  console.log(paths)
  config.box = defaultConfig.box
  console.log('=============second=============')
  const path2 = await provider.provide(config)
  console.log(path2)
  console.log('=============third=============')
  delete config.box
  const path3 = await provider.provide(config)
  console.log(path3)
})
