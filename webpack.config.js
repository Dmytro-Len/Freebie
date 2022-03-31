const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    hot: true,
    port: 9000,
  },
  plugins: [new HtmlWebpackPlugin({
    // title: 'Freebie',
    filename: 'index.html',
    template: 'index.html',
    meta: {
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      description: 'a description of the page',
      // keywords: 'new, super, amazing',
      robots: 'content=website',
      'Content-Security-Policy': {
        'http-equiv': 'Content-Security-Policy'
      },
      'Content-Security-Policy': {
        'property': 'og:type=website'
      }
    }
  })],
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        // MiniCssExtractPlugin.loader,
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
  ],
  },
}