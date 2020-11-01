import { BoxComponentObject } from '@theme/types/components/Box'
import { ButtonComponentObject } from '@theme/types/components/Button'
import { ContainerComponentObject } from '@theme/types/components/Container'
import { HeaderComponentObject } from '@theme/types/components/Header'
import { SidebarComponentObject } from '@theme/types/components/Sidebar'
import Global from '@theme/types/components/Global'
import { IconComponentObject } from '@theme/types/components/Icon'

export type IsComponentObject =
  | BoxComponentObject
  | ButtonComponentObject
  | ContainerComponentObject
  | HeaderComponentObject
  | SidebarComponentObject
  | IconComponentObject
  | Global
