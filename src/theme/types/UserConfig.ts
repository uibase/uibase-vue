import Global from '@theme/types/components/Global'
import ButtonConfig from '@theme/types/components/Button'
import BoxConfig from '@theme/types/components/Box'
import ContainerConfig from '@theme/types/components/Container'
import HeaderConfig from '@theme/types/components/Header'
import SidebarConfig from '@theme/types/components/Sidebar'
import IconConfig from '@theme/types/components/Icon'
import NumberBudgeConfig from '@theme/types/components/NumberBudge'
import AvatarConfig from '@theme/types/components/Avatar'

export interface UserConfig {
  global: Global
  button?: ButtonConfig
  box?: BoxConfig
  container?: ContainerConfig
  header?: HeaderConfig
  sidebar?: SidebarConfig
  icon?: IconConfig
  numberBudge?: NumberBudgeConfig
  avatar?: AvatarConfig
}

export default UserConfig
