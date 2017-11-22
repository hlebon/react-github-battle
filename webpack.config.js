const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
process.env.NODE_ENV = 'development';

module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index-bundle.js',
        publicPath: '/'
    },
    module: {
        rules: 
        [
            { test: /\.(js)$/, loader: 'babel-loader' },
            { test: /\.(css)$/, loader: [ 'style-loader', 'css-loader' ]}
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
};