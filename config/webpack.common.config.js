const path = require('path');
const webpack = require('webpack');

const { NODE_ENV } = process.env;

module.exports = {
    resolve: {
        modules: ['./node_modules'],
        extensions: ['.js', '.jsx']
    },

    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        })
    ]
};
