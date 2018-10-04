var path = require('path');

var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: "source-map",
  context: __dirname + "/src",
  entry: './index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: 'build',
    host: '0.0.0.0',
    port: 3000
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: PRODUCTION ? ["eslint-loader"] : [],
      },
      {
        test: /\.tsx?$/,
        loaders: ['ts-loader'],
      },
      {
        test: /\.html$/,
        loaders: ["html-loader"]
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html")
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
