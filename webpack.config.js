const path = require ('path')
const HTMLWebpackPlugin = require ('html-webpack-plugin')
const {CleanWebpackPlugin} = require ('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve (__dirname, 'src'),
  mode: 'development',
  entry: './index.js',
  output: {
      filename: '[name].[contenthash].js',
      path: path.resolve (__dirname, 'prod')
  },
  plugins: [
      new HTMLWebpackPlugin ({
        template: 'index.html'
      }),
      new CleanWebpackPlugin (),
      new CopyPlugin()
  ],
  module:{
      rules: [
          {
            test: /\.css$/,
            use: ['style-loader','css-loader']
          },
          {
            test: /\.(png|jpg|jpeg|svg])$/,
            use: ['file-loader']
          }
      ]
  }
}