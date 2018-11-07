module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-export-default-from',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-export-namespace-from',
                'module:react-hot-loader/babel'
              ],
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      node: 'current',
                      browsers: ['last 2 versions']
                    },
                    loose: true
                  }
                ],
                '@babel/preset-react'
              ],
              env: {
                production: {
                  presets: []
                }
              }
            }
          }
        ]
      }
    ]
  }
});
