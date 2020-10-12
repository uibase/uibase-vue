export type BackgroundProperties =
  | string
  | {
      color: string
      image?: string
      position?: string
      size?: string
    }

export type Background = {
  background?: BackgroundProperties
}

export type RequiredBackground = {
  background: BackgroundProperties
}
