const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|png|gif|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                use: "file-loader"
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({   // if we load js & css by using assets folder then we do not need to use it
            'window.jQuery': 'jquery', // for using window.jQuery
            'window.$': 'jquery', // for using window.$
            jQuery: 'jquery', // for using jQuery
            $: 'jquery', // for using $
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './public/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: 'public/build/**', to: 'assets'
                },
                { 
                    from: 'public/dist/**', to: 'assets'
                },
                { 
                    from: 'public/images/**', to: 'assets'
                },
                
                { 
                    from: 'public/plugins/**', to: 'assets'
                },
            ]
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8081,
        historyApiFallback: true
    },
    devtool: 'inline-source-map'
};