const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: 'source-map',
  context: __dirname + '/src',
  entry: './index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: 'build',
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: PRODUCTION ? ['tslint-loader'] : []
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: ['ts-loader'],
      },
      {
        test: /\.html$/,
        loaders: ['html-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    // 本番環境
    ...(
      PRODUCTION ? [
        new UglifyJSPlugin(),
      ] : []
    ),
  ],
  performance: {
    hints: false
  }
}
