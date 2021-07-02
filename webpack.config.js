const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                include: path.resolve(__dirname, 'src/js'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    /*'style-loader',*/
                    {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 1
                      }
                    },
                    'postcss-loader'
                ]
            },
            { 
                test: /\.pug$/,
                use: ['pug-loader']
            },
        ]
    },
    optimization: {
        removeAvailableModules: false,
        minimizer: [
            (compiler) => {
                const TerserPlugin = require('terser-webpack-plugin');
                new TerserPlugin({
                  terserOptions: {
                        compress: {},
                    }
                }).apply(compiler);
            },
        ],
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin(),
        new CssMinimizerPlugin(),
        new HtmlWebpackPlugin({
            template: './src/pug/index.pug'
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        watchContentBase: true,
        hot: true
    },
};