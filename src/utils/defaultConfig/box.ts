import BoxConfig from '@theme/types/components/Box'

export default {
  radius: 5,
  title: {
    fontSize: 15,
    fontWeight: 'normal',
    margin: {
      bottom: '16px'
    }
  },
  styles: {
    white: {
      background: '$white',
      shadow: '0px 1px 4px rgba(0,0,0,0.2)',
      fontColor: '$baseFont',
      default: true
    },
    black: {
      background: '$black',
      fontColor: '$white',
      footerDivide: {
        border: '1px solid #fff'
      }
    }
  }
} as BoxConfig
