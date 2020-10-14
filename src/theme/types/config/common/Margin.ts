export type MarginProperties =
  | string
  | {
      top?: string
      bottom?: string
      right?: string
      left?: string
    }

export type Margin = {
  margin?: MarginProperties
}

export type RequiredMargin = {
  margin: MarginProperties
}
