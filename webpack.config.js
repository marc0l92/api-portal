const path = require('path')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    // mode: 'production',
    mode: 'development',
    // watch: true,
    entry: {
        apiToSpreadsheet: './src/apiToSpreadsheet.js',
    },
    output: {
        filename: 'apiToSpreadsheet.js',
        path: path.resolve(__dirname, 'docs/js'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'docs'),
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