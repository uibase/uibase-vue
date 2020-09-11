const path = require('path')
module.exports = {
  extensions: ['.js', '.vue'],
  alias: {
    '@': path.resolve(__dirname, '../src/'),
    components: path.resolve(__dirname, '../src/components')
  }
}
