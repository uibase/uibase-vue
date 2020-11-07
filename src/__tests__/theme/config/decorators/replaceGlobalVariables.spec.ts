import 'reflect-metadata'
import UserConfig from '@theme/types/UserConfig'
import { BoxComponentObject } from '@theme/types/components/Box'
import { SidebarComponentObject } from '@theme/types/components/Sidebar'
import defaultConfig from '@src/utils/defaultConfig'
import replaceGlobalVariables from '@theme/config/decorators/replaceGlobalVariables'

function ComponentModel(target: any) {
  target.prototype.generate = function() {
    const result = this.prototype.generate()
    result.override = 'yes'
    console.log('override!!!!', result)
    return result
  }
  return target
}

interface IBoxComponentModel {
  generate(): BoxComponentObject
}

interface ISidebarComponentModel {
  generate(): SidebarComponentObject | undefined
}

abstract class ComponentModelClass {
  protected userConfig: UserConfig
  constructor(userConfig: UserConfig) {
    this.userConfig = userConfig
  }
}

class SidebarComponentModel extends ComponentModelClass
  implements ISidebarComponentModel {
  @replaceGlobalVariables
  generate(): SidebarComponentObject | undefined {
    return this.userConfig.sidebar
  }
}

class BoxComponentModel extends ComponentModelClass
  implements IBoxComponentModel {
  generate(): BoxComponentObject {
    return {} as BoxComponentObject
  }
}

test('testDecorator', () => {
  const sidebar = new SidebarComponentModel(defaultConfig)
  const componentObject = sidebar.generate()
  if (componentObject) {
  }
})
