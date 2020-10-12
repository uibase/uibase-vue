import Button from './Button'
import Box from './Box'
import Container from './Container'
import Header from './Header'
import Sidebar from './Sidebar'
import { IconPaths } from './Icon'
import Global from '@uiConfig/Global'

export interface ThemeConfig {
  global: Global
  button?: Button
  box?: Box
  container?: Container
  header?: Header
  sidebar?: Sidebar
  icons?: string | IconPaths
}

export default ThemeConfig
