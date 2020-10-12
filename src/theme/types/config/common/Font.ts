export type FontColorProperties = string
export type FontSizeProperties = string | number

export type FontColor = {
  fontColor?: FontColorProperties
}

export type RequiredFontColor = {
  fontColor: FontColorProperties
}

export type FontSize = {
  fontSize?: FontSizeProperties
}

export type RequiredFontSize = {
  fontSize: FontSizeProperties
}
