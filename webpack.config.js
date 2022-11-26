const path = require('path')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    // mode: 'production',
    mode: 'development',
    // watch: true,
    entry: {
        apiToCsv: './src/apiToCsv.js',
    },
    output: {
        filename: 'apiToCsv.js',
        path: path.resolve(__dirname, 'public/js'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    resolve: {
        preferRelative: true,
    },
    resolve: {
        fallback: {
            //   util: require.resolve("util/"),
            http: false,
            https: false,
            buffer: false,
        }
    },
    plugins: [
        new NodePolyfillPlugin(),
    ],
}