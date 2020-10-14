import Button from '@uiConfig/Button'

export default {
  colors: {
    primary: {
      background: {
        color: '$primary'
      },
      fontColor: '$white',
      shadow: '0px 1px 4px rgba(0, 0, 0, 0.2)',
      hover: {
        background: '$primary',
        fontColor: '$white',
        opacity: 0.8
      }
    },
    secondary: {
      background: '$secondary',
      fontColor: '$white',
      shadow: '0px 1px 4px rgba(0, 0, 0, 0.2)',
      hover: {
        background: '$secondary',
        fontColor: '$white',
        opacity: 0.8
      }
    },
    border: {
      background: '$white',
      fontColor: '$black',
      shadow: '0px 1px 4px rgba(0, 0, 0, 0.2)',
      border: '3px solid $black',
      hover: {
        background: '$black',
        fontColor: '#white'
      }
    }
  },
  sizes: {
    medium: {
      height: 32,
      fontSize: 13,
      default: true
    },
    small: {
      height: 24,
      fontSize: 11
    },
    large: {
      height: 40,
      fontSize: 16
    }
  },
  radius: 3
} as Button
