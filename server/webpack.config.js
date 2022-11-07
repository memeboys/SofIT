const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.ts'),
    mode: 'development',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    },
    plugins: [
        new NodemonPlugin(),
    ],
}