import BgAndColor from './common/BgAndColor'

export type BoxStyle = BgAndColor & {
  footerDivide: string | boolean
  border: string | boolean
  shadow: string | boolean
  [key: string]: string | number | boolean
}

type Box = {
  radius: number
  styles: {
    [key: string]: BoxStyle
  }
}

export default Box
