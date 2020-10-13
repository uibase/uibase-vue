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
  bordered: {
    width: 2
  },
  radius: 3
} as Button
