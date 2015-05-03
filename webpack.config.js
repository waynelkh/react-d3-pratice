var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'src/boot.jsx')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        {
            test: /\.jsx$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src/')
        },
        {
            test: /\.css$/, loader: 'style!css'
        },
        {
            test: /\.less$/, loader: 'style!css!less',
            include: [
              path.resolve(__dirname, "src/"),
            ]
        },
        {
            test: /\.(html|png)$/,
            loader: "file?name=[path][name].[ext]&context=./src"
        },
        {
            test: /\.(ttf|eot|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=8192"
        }
        ],
        noParse: ['react', 'material-ui']
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new WebpackNotifierPlugin(),
        new webpack.ProvidePlugin({ //load in every js so web don't require react
            "React": 'react'
        })
    ],
    devtool: "eval",
    devServer: {
        contentBase: "build",
        noInfo: true,
        stats: {
            colors: true,
            cached: false,
            cachedAssets: false
        },

    },
    progress: true

};