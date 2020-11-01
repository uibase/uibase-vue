export type IconPaths = {
  [iconName: string]: string
}

export type Icon = {
  paths: IconPaths | string
  defaultColors: boolean
  colors?: {
    [key: string]: string
  }
}

export type IconComponentObject = {
  paths: IconPaths
  colors: {
    [key: string]: string
  }
}

export default IconPaths
