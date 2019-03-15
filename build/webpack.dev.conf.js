const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')

const baseConfig = require('./webpack.config')

module.exports = merge.smart(baseConfig, {
    mode: 'development',
    devtool: "cheap-module-eval-source-map",

    stats: 'verbose',
    output: {
        path: path.resolve(__dirname, '../dev'),
    },
    module: {
        rules: [{
            oneOf: [{
                test: /\.css/,
                exclude: /node_modules/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            url: (url, resourcePath) => {
                                return url.includes('http://www.xxx.com');
                            },
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    // {
                    //     loader: 'sass-loader'
                    // }
                ]
            }, ]
        }],
    },

    devServer: {
        contentBase: [path.resolve(__dirname, '../dev'), path.resolve(__dirname, '../dll')],
        host: '0.0.0.0',
        port: 8080,
        proxy: {}
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.ejs',
            templateParameters: {
                'NODE_ENV': process.env.NODE_ENV
            },
        }),
        new BundleAnalyzerPlugin(),
        new webpack.DllReferencePlugin({
            // context: path.resolve('..'),
            manifest: require('../dll/manifest.json'),
            // name: 'vendor'
        })
    ]
})
