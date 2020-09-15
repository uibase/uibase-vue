import Button from './Button'
import ThemeColors from './ThemeColors'
import Box from './Box'
import Container from './Container'
import Header from './Header'
import Sidebar from './Sidebar'

export interface ThemeConfig {
  colors: ThemeColors
  button: Button
  box: Box
  container: Container
  header: Header
  sidebar: Sidebar
}

export default ThemeConfig
