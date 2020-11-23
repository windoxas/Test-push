const path = require('path')

module.export = {
    mode: 'development',
    watch: true,
    entry: "./src/index",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/build/"
    },
    devServer: {
        port: 8000,
        historyApiFallback: true,
        hot: true,
    },
}
