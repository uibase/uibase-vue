module.exports = {
  global: {
    colors: {
      primary: 'blue',
      secondary: 'green',
      baseFont: 'black',
      error: 'yellow',
      notification: 'purple'
    }
  },
  button: {
    colors: {
      primary: {
        fontColor: '$primary',
        background: '$error',
        hover: {
          fontColor: '$error',
          background: '$primary'
        }
      },
      secondary: {
        fontColor: 'white',
        background: 'black',
        hover: {
          fontColor: 'black',
          background: 'white'
        }
      }
    },

    sizes: {
      small: {
        default: true,
        fontSize: 9,
        height: 59
      }
    },
    bordered: {
      width: 3
    }
  },
  box: {
    styles: {
      primary: {
        background: '$primary',
        fontColor: '$baseFont'
      },
      secondary: {
        background: '$notification',
        fontColor: '$error'
      },
      third: {
        background: '$secondary',
        fontColor: '$notification'
      }
    }
  }
}
