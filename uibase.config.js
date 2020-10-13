module.exports = {
  global: {
    colors: {
      deepRed: '#D9072D',
      redLight: '#fff9f8',
      white: '#fff',
      black: '#140F0F',
      deepBlue: '#0F4C81',
      brightGreen: '#38CC8E',
      brightYellow: '#ffe18d',
      link: '#509fd2',
      primaryVariant: '#69fcbb',
      primary: '#38CC8E',
      secondary: '#0F4C81',
      error: '#D9072D',
      notification: '#D9072D',
      baseFont: '#140F0F'
    }
  },
  box: {
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
        footerDivide: { border: '1px solid #fff' }
      }
    }
  },
  button: {
    colors: {
      primary: {
        background: { color: '$primary' },
        fontColor: '$white',
        shadow: '0px 1px 4px rgba(0, 0, 0, 0.2)',
        hover: { background: '$primary', fontColor: '$white', opacity: 0.8 }
      },
      secondary: {
        background: '$secondary',
        fontColor: '$white',
        shadow: '0px 1px 4px rgba(0, 0, 0, 0.2)',
        hover: { background: '$secondary', fontColor: '$white', opacity: 0.8 }
      }
    },
    sizes: {
      medium: { height: 32, fontSize: 13, default: true },
      small: { height: 24, fontSize: 11 },
      large: { height: 40, fontSize: 16 }
    },
    bordered: { width: 2 },
    radius: 3
  },
  container: {
    header: { background: '#333', fontColor: '$white' },
    footer: { background: '#333' }
  },
  header: {
    background: '$white',
    bottomBorder: { border: '1px solid #ccc' },
    fontColor: '$black',
    height: 50
  },
  sidebar: {
    active: { background: '$white', fontColor: '#333' },
    background: '$black',
    fontColor: '$white',
    menuHeader: { background: '$black' },
    width: 200
  }
}
