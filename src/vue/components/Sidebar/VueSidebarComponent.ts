import ITemplateRenderer from '@theme/helpers/ITemplateRenderer'
import { TemplateComponent } from '@theme/types/TemplateComponent'
import ComponentObject from '@theme/config/ComponentObject'
import sidebarTemplate from './sidebar.ejs'
import sidebarListItemTemplate from './sidebar-list-item.ejs'
import sidebarTitleTemplate from './sidebar-list-title.ejs'
import ISidebarComponent from '@theme/components/ISidebarComponent'
import { RouterName } from '@factory/ComponentProviderFactory/vue/VueComponentProvider'
import { SidebarComponentObject } from '@theme/types/components/Sidebar'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier')

export default class VueSidebarComponent implements ISidebarComponent {
  private readonly componentObject: ComponentObject
  private templateRenderer: ITemplateRenderer

  constructor(
    componentObject: ComponentObject,
    router: RouterName,
    templateRenderer: ITemplateRenderer
  ) {
    this.componentObject = componentObject
    this.templateRenderer = templateRenderer
  }

  async generate(): Promise<TemplateComponent[]> {
    if (this.componentObject.sidebar()) {
      const sidebar = await this.templateRenderer.render(
        sidebarTemplate,
        this.componentObject.sidebar() as SidebarComponentObject
      )
      const sidebarTitle = await this.templateRenderer.render(
        sidebarTitleTemplate,
        this.componentObject.sidebar() as SidebarComponentObject
      )
      const sidebarListItem = await this.templateRenderer.render(
        sidebarListItemTemplate,
        this.componentObject.sidebar() as SidebarComponentObject
      )
      return [
        {
          fileName: ['', 'BaseSidebar.vue'],
          fileType: 'vue',
          componentStr: prettier.format(sidebar, { parser: 'vue' })
        },
        {
          fileName: ['', 'BaseSidebarTitle.vue'],
          fileType: 'vue',
          componentStr: prettier.format(sidebarTitle, { parser: 'vue' })
        },
        {
          fileName: ['', 'BaseSidebarListItem.vue'],
          fileType: 'vue',
          componentStr: prettier.format(sidebarListItem, { parser: 'vue' })
        }
      ]
    } else {
      throw `templateCreationError: sidebar config has not be found.`
    }
  }
}
