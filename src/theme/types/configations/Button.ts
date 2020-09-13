import BgAndColor from './common/BgAndColor'

export type ButtonConditions = BgAndColor & {
  hover: BgAndColor & {
    [key: string]: string
  }
}

export type ButtonColors = {
  primary: ButtonConditions
  secondary: ButtonConditions
  [key: string]: ButtonConditions
}
type Button = {
  radius: number
  colors: ButtonColors
  bordered: {
    borderWidth: number
  }
}

export default Button
