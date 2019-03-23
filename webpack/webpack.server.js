const path = require('path')
const root = path.resolve(__dirname, '..')
const vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    target: 'node',
    mode: 'development',
    entry: ['babel-polyfill', path.join(root, 'entry/entry-server.js')],
    output: {  // 输出
        libraryTarget: 'commonjs2',
        path: path.join(root, 'dist'),
        filename: 'bundler.server.js'
    },
    module: { // 模块
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: root,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'vue-style-loader!css-loader'
            }
        ]
    },
    plugins: [new vueLoaderPlugin()] // 插件
}