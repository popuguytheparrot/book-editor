module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'img/'
            }
          }
        ]
      }
    ]
  }
});
