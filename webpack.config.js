var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

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
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            Components: path.resolve(__dirname, 'src/components'),
            Action: path.resolve(__dirname, 'src/action'),
            Reducer: path.resolve(__dirname, 'src/reducer')
        }
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