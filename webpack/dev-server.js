const { join } = require('path');

const srcPath = join(__dirname, 'src');

module.exports = () => ({
  devServer: {
    contentBase: [srcPath],
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 8080,
    publicPath: '/',
    overlay: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
});
