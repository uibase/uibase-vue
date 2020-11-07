import IRenderPluginImporter from '@factory/ComponentProviderFactory/helper/IRenderPluginImporter'
import { RenderedFilePath } from '@theme/types/RenderedFilePath'
import { componentNamePath } from '@factory/ComponentProviderFactory/helper/index'
import ejs from 'ejs'

export class RenderVuePluginImporter implements IRenderPluginImporter {
  private router: string
  constructor(router: string) {
    this.router = router
  }
  async render(
    templateString: string,
    renderedFilPaths: RenderedFilePath[]
  ): Promise<string> {
    const paths: [string, string][] = renderedFilPaths.reduce(
      (r: [string, string][], path) => {
        if (path.match(/\.vue$/)) r.push(componentNamePath(path, 'vue'))
        return r
      },
      []
    )
    return ejs.render(
      templateString,
      {
        paths,
        router: this.router
      },
      {
        async: true
      }
    )
  }
}
