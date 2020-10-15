import path from 'path'
import StorybookProvider from '@src/controllers/storybook/StorybookProvider'
import StorybookEjsRenderer from '@src/controllers/storybook/StorybookEjsRenderer'
import ProvidedFsFileRepository from '@src/repositories/ProvidedFsFileRepository'
import defaultConfig from '@util/defaultConfig/index'

test('StorybookProvider', async () => {
  const provider = new StorybookProvider(
    path.join(__dirname, './stories'),
    'vue',
    new StorybookEjsRenderer('vue', '@uibase/uibase-vue'),
    new ProvidedFsFileRepository()
  )
  const paths = await provider.provide(defaultConfig)
  console.log(paths)
})
