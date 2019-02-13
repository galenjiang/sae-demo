const path = require('path');
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// TODO: Is it needed?
// const DeclarationBundlerPlugin = require('webpack-plugin-typescript-declaration-bundler');

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    // mode: 'production',
    // devtool: "source-map",
    // Change to your "entry-point".
    // context: path.resolve(__dirname, '../src'),
    entry: {
        index: './src/index.ts'
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name]_[hash:4].js',
        chunkFilename: '[name]_[chunkhash:4].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    externals: {
        // ramda: 'ramda'
        // ramda: {
        //     commonjs: 'ramda',
        //     commonjs2: 'ramda',
        //     amd: 'ramda',
        //     root: 'ramda'
        // }
    },
    module: {
        rules: [{
            oneOf: [{
                    // Include ts, tsx, js, and jsx files.
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    // loader: 'babel-loader',
                    use: [
                        'babel-loader'
                    ]
                },
                {
                    test: /\.css/,
                    exclude: /node_modules/,
                    use: [
                        // use in development
                        // {
                        //     loader: 'style-loader',
                        // },
                        // use in production
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {}
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2,
                                url: (url, resourcePath) => {
                                    return url.includes('www.sogou.com');
                                },
                            }
                        },
                        {
                            loader: 'postcss-loader',
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    exclude: /node_modules/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }]
                }
            ]
        }],
    },
    optimization: {
        // minimizer: [
        //     // TODO:
        //     /**
        //      * While webpack 5 is likely to come with a CSS minimizer built-in, 
        //      * with webpack 4 you need to bring your own. To minify the output, 
        //      * use a plugin like optimize-css-assets-webpack-plugin. Setting optimization.
        //      * minimizer overrides the defaults provided by webpack, 
        //      * so make sure to also specify a JS minimizer:
        //      **/
        //     new UglifyJsPlugin({
        //         cache: true,
        //         parallel: true,
        //         sourceMap: true // set to true if you want JS source maps
        //     }),
        //     // new OptimizeCSSAssetsPlugin({})
        // ],
        // namedModules: true,
        // namedChunks: true,
        // moduleIds: 'named',
        // chunkIds: 'named'
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.APP_SERVER': JSON.stringify(process.env.APP_SERVER),
        })
        // new MiniCssExtractPlugin({
        //     filename: "[name].css"
        // }),
    ],

};