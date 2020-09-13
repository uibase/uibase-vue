import BgAndColor from './common/BgAndColor'

export type ButtonColors = {
  primary: BgAndColor
  secondary: BgAndColor
  [key: string]: BgAndColor
}
type Button = {
  radius: number
  colors: ButtonColors
}

export default Button
