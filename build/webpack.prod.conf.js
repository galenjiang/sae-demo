const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')



module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: "source-map",
  module: {
    rules: [
      {
        oneOf: [
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]_[chunkhash:4].css"
    }),

    // new HtmlWebpackPlugin({
    //   template: 'public/index.ejs',
    //   templateParameters: {
    //     'NODE_ENV': process.env.NODE_ENV
    //   },
    //
    //   excludeChunks: ['main']
    // }),
    //
    // new HtmlWebpackPlugin({
    //   template: 'public/index.ejs',
    //   templateParameters: {
    //     'NODE_ENV': process.env.NODE_ENV
    //   },
    //   excludeChunks: ['other']
    // }),

    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '..'),
      verbose: true
    }),

    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '..'),
      verbose: true
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    }),
  ],
})
