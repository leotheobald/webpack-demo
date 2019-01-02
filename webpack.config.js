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
      // sass preprocess and pass through the chain.
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      },
      // load any image files included in js.
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  // Manage the output of content.
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
