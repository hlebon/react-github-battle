const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
process.env.NODE_ENV = 'development';

module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index-bundle.js'
    },
    module: {
        rules: 
        [
            { test: /\.(js)$/, loader: 'babel-loader' },
            { test: /\.(css)$/, loader: [ 'style-loader', 'css-loader' ]}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
};