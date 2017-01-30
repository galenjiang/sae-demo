/**
 * Created by Galen on 2016/12/24.
 */

// import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// console.log(111111, __dirname, path.resolve(), process.cwd())

module.exports = {
  devServer: {
    // hot: true,
    // inline: true,   // 不能与config同时设置
    contentBase: './test-dist/',
    publicPath: '/',
    host: '0.0.0.0',
  },
  // context 以process.cwd()为root
  // context: path.resolve('../'),
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:8080/',
      'webpack/hot/dev-server',
      './test-src/app.js',
    ],
  },
  output: {
    path: './test-dist',
    filename: '[name].js',
    chunkFilename: 'chunk-[name]-[hash:8]-[chunkhash:8].js',
    publicPath: '',
  },
  module: {
    noParse: /lodash/,
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /(?=module.)\.css/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /(?!module.)\.css/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  plugins: [

    // 提供全局的变量，在模块中使用无需用require引入
    new HtmlWebpackPlugin({
      filename: 'app.html',
      template: './test-src/app.html',
      chunks: ['app'],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
