import Global from '@theme/types/components/Global'
import { BoxComponentObject } from '@theme/types/components/Box'
import { ButtonComponentObject } from '@theme/types/components/Button'
import { ContainerComponentObject } from '@theme/types/components/Container'
import { HeaderComponentObject } from '@theme/types/components/Header'
import { SidebarComponentObject } from '@theme/types/components/Sidebar'
import { IconComponentObject } from '@theme/types/components/Icon'

export type ComponentObjects = {
  global: Global
  button?: ButtonComponentObject
  box?: BoxComponentObject
  container?: ContainerComponentObject
  header?: HeaderComponentObject
  sidebar?: SidebarComponentObject
  icons?: IconComponentObject
}