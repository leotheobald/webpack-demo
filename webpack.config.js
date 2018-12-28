const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
//const ImageWebpackLoader = require('image-webpack-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let htmlOptions = {
  template: path.resolve(__dirname, 'src/', 'index.html'),
  filename: './index.html',
  minify: {
    collapseWhitespace: true,
    removeAttributeQuotes: true
  },
  stats: { children: false }
};

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: ''
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(htmlOptions),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "assets/css/[name].css",
      chunkFilename: "assets/css/[id].css"
    }),
    new CleanWebpackPlugin(['dist']),
    //new ImageWebpackLoader(['dist']),
    //new webpack.optimize.ModuleConcatenationPlugin()
  ],
  devServer: {
    contentBase: './src'
  }
};
