const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common.config');

module.exports = merge(commonConfig, {
    devtool: 'eval-source-map',

    mode: 'development',

    entry: {
        app: [
            '@babel/polyfill',
            'webpack-hot-middleware/client?reload=true',
            './app/index.js'
        ],
        vendor: [
            'react',
            'react-dom'
        ]
    },

    output: {
        filename: 'js/[name].js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
