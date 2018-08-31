const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ManifestPlugin = require('webpack-manifest-plugin');

const commonConfig = require('./webpack.common.config');

const ROOT_DIR = path.resolve(__dirname, '../');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');

const prodConfig = {
    devtool: 'source-map',

    mode: 'production',

    target: 'web',

    entry: {
        app: [
            '@babel/polyfill',
            './app/index.js'
        ],
        vendor: [
            'react',
            'react-dom'
        ]
    },

    output: {
        path: DIST_DIR,
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[chunkhash].js'
    },

    optimization: {
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist'], { root: ROOT_DIR }),
        new ManifestPlugin({
            basePath: '/'
        })
    ]
};

if (process.env.NODE_ANALYZE) {
    prodConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = merge(commonConfig, prodConfig);