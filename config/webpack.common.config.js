const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { NODE_ENV } = process.env;

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
};
