const path = require('path');
const nodeExternals = require('webpack-node-externals');

const ROOT_DIR = path.resolve(__dirname, '../');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');

module.exports = {
    mode: 'production',

    target: 'node',

    entry: './server/server.js',

    output: {
        path: DIST_DIR,
        filename: 'server.bundle.js'
    },

    externals: [nodeExternals()],

    node: {
        __filename: true,
        __dirname: true
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['client', 'node_modules']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};
