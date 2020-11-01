import StorybookEjsRenderer from '@src/controllers/storybook/StorybookEjsRenderer'
import defaultConfig from '@util/defaultConfig'
import ButtonStory from '@src/controllers/storybook/stories/Button/ButtonStory'
import ComponentObject from '@theme/config/ComponentObject'

test('Vue ButtonStory', async () => {
  const renderer = new StorybookEjsRenderer('vue', '@uibase/uibase-vue')
  const config = defaultConfig
  const vueButtonStory = new ButtonStory(
    new ComponentObject(config),
    renderer,
    'vue'
  )
  const result = await vueButtonStory.generate()
  console.log(result)
})
