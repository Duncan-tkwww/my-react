var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "main":'./src/index.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|_spec\.jsx)/,
            loader: 'react-hot-loader!babel-loader'
        },{
            test: /\.css$/, loader: 'style-loader!css-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks:['main'],
            filename: 'index.html',
            inject: 'body'
        })
    ]
};