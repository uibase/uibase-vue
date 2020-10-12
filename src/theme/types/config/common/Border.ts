export type BorderProperties =
  | string
  | {
      width?: string
      color?: string
      style?: string
    }

export type BorderWidth = {
  width?: string | number
}

export type RequiredBorderWidth = {
  borderWidth: string | number
}

export type Border = {
  border?: BorderProperties
}

export type RequiredBorder = {
  border: BorderProperties
}

