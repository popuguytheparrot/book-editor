const webpack = require('webpack');
const merge = require('webpack-merge');
const { join, resolve } = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');

const babel = require('./webpack/babel');
const devServer = require('./webpack/dev-server');
const fonts = require('./webpack/fonts');
const images = require('./webpack/images');
const html = require('./webpack/html');
const optimization = require('./webpack/optimization');
const eslint = require('./webpack/eslint');

const isProd = process.env.NODE_ENV === 'production';

const PATH = {
  src: join(__dirname, 'src'),
  build: join(__dirname, 'build'),
  app: join(__dirname, 'src', 'index.js')
};

const common = merge([
  {
    context: resolve(__dirname),
    entry: {
      app: PATH.app
    },
    output: {
      path: PATH.build,
      filename: 'bundle.[hash].js',
      chunkFilename: '[name].chunk.[hash].js',
      publicPath: '/'
    },

    resolve: {
      extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.svg'],
      modules: ['node_modules'],
      alias: {
        actions: resolve(__dirname, 'app', 'actions'),
        components: resolve(__dirname, 'app', 'components'),
        libs: resolve(__dirname, 'lib'),
        mocks: resolve(__dirname, 'app', 'mocks'),
        pages: resolve(__dirname, 'app', 'pages'),
        reducers: resolve(__dirname, 'app', 'reducers'),
        routes: resolve(__dirname, 'app', 'routes'),
        store: resolve(__dirname, 'app', 'store'),
        src: resolve(__dirname, 'src')
      }
    },

    plugins: [
      // new BundleAnalyzerPlugin(),
      new HtmlWebPackPlugin({
        template: `${PATH.src}/index.ejs`,
        title: 'book-editor',
        lang: 'en'
      })
    ]
  },
  babel(),
  html(),
  fonts(),
  images(),
  eslint()
]);

module.exports = () =>
  isProd
    ? merge([
        common,
        {
          plugins: [new CleanWebPackPlugin('build')]
        },
        optimization()
      ])
    : merge([
        common,
        {
          devtool: 'cheap-module-source-map',
          optimization: {
            namedModules: true
          },
          performance: {
            hints: false
          },
          plugins: [new webpack.HotModuleReplacementPlugin()]
        },
        devServer()
      ]);
