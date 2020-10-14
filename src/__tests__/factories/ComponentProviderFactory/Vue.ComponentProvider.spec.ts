import path from 'path'
import VueComponentProvider from '@factory/ComponentProviderFactory/vue/VueComponentProvider'
import TemplateFactory from '@factory/TemplateFactory/TemplateFactory'
import ProvidedFsFileRepository from '@src/repositories/ProvidedFsFileRepository'
import ThemeConfig from '@uiConfig/ThemeConfig'
import defaultConfig from '@util/defaultConfig'

test('Vue Component Provider', async () => {
  const pathToProvide = path.join(__dirname, './.uiBase')
  const factory = new TemplateFactory()
  const repository = new ProvidedFsFileRepository()
  const provider = new VueComponentProvider(pathToProvide, factory, repository)
  const config: ThemeConfig = {
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
