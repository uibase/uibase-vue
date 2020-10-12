import path from 'path'
import { RenderVuePluginImporter } from '@factory/ComponentProviderFactory/helper/RenderVuePluginImporter'
test('RenderVuePluginImporter', async () => {
  const dir = path.resolve(__dirname, '../vue/index.js.ejs')
  const importer = new RenderVuePluginImporter()
  const str = await importer.render(dir, [
    '/User/test/fefef/II/interest/Button.vue',
    '/User/test/fefef/II/ifefe/Box.vue',
    '/User/test/fefef/II/ifefe/OldName.vue'
  ])

  console.log(str)
})
