import CssStyleManager from '@helper/StyleManager/CssStyleManager'

test('css style manager', () => {
  const cssProps = {
    background: {
      color: 'red'
    },
    fontSize: 12,
    border: '1px solid #ccc',
    fontColor: 'black',
    height: 200,
    opacity: 0.5,
    radius: 12,
    hover: {
      this: 'is not readable'
    },
    width: 200
  }

  const styleManager = new CssStyleManager()
  console.log(styleManager.generate(cssProps))
})
