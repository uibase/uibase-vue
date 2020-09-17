import Button from './Button'
import ThemeColors from './ThemeColors'
import Box from './Box'
import Container from './Container'
import Header from './Header'
import Sidebar from './Sidebar'
import { IconPaths } from './Icon'

export interface ThemeConfig {
  colors: ThemeColors
  button: Button
  box: Box
  container: Container
  header: Header
  sidebar: Sidebar
  icons: IconPaths
}

export default ThemeConfig
