import AvatarConfig from '@theme/types/components/Avatar'

export default {
  defaultSize: 64,
  anonymousImage: '',
  styles: {
    circle: {
      radius: '50%',
      shadow: '0 2px 4px 0 rgba(0,0,0,.3)',
      default: true
    },
    square: {
      radius: 8,
      shadow: '0 2px 4px 0 rgba(0,0,0,.3)',
    }
  }
} as AvatarConfig
