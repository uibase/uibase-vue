import Box from '@uiConfig/Box'

export default {
  radius: 5,
  styles: {
    white: {
      background: '$white',
      shadow: '0px 1px 4px rgba(0,0,0,0.2)',
      fontColor: '$baseFont'
    },
    black: {
      background: '$black',
      fontColor: '$white',
      footerDivide: {
        border: '1px solid #fff'
      }
    }
  }
} as Box
