module.exports = {
  box: {
    radius: 5,
    styles: {
      white: {
        background: '$white',
        border: false,
        footerDivide: false,
        shadow: '0px 1px 4px rgba(0,0,0,0.2)',
        color: '$baseFont'
      },
      black: {
        background: '$black',
        color: '$white',
        border: false,
        shadow: false,
        footerDivide: '1px solid #fff'
      }
    }
  },
  button: {
    colors: {
      primary: {
        background: '$primary',
        color: '$white',
        hover: { background: '$primary', color: '$white', opacity: '0.8' }
      },
      secondary: {
        background: '$secondary',
        color: '$white',
        hover: { background: '$secondary', color: '$white', opacity: '0.8' }
      }
    },
    bordered: { borderWidth: 2 },
    radius: 3
  },
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
    primary: '$brightGreen',
    secondary: '$deepBlue',
    error: '$deepRed',
    notification: '$deepRed',
    baseFont: '$black'
  },
  container: {
    headerColor: '$white',
    headerBgColor: '#333',
    footerBgColor: '$white'
  },
  header: {
    bgColor: '$white',
    bottomBorder: '1px solid #ccc',
    color: '$black',
    hasShadow: false,
    shadowColor: '',
    height: 50
  },
  sidebar: {
    active: { bgColor: '$white', color: '#333' },
    bgColor: '$black',
    color: '$white',
    menuHeader: { bgColor: '$black' },
    width: 200
  },
  icons: { IconBell: '@uibase/uibase-vue/src/assets/icons/bell.svg' }
}
