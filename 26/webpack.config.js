var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}