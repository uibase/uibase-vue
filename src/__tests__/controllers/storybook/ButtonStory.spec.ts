import StorybookEjsRenderer from '@src/controllers/storybook/StorybookEjsRenderer'
import defaultConfig from '@util/defaultConfig'
import UBConfig from '@theme/config/UBConfig'
import ButtonStory from '@src/controllers/storybook/stories/Button/ButtonStory'

test('Vue ButtonStory', async () => {
  const renderer = new StorybookEjsRenderer('vue', '@uibase/uibase-vue')
  const config = defaultConfig
  const vueButtonStory = new ButtonStory(new UBConfig(config), renderer, 'vue')
  const result = await vueButtonStory.generate()
  console.log(result)
})
