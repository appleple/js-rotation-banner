const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
        'rotation-banner.bundle': "./src/index.ts",
    },
    output: {
        path: `${__dirname}/dist`,
        filename: "[name].js",
    },
    mode: "development",
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [
        // other plugins...
        new Dotenv(), // ←ここを追加
    ],
    devServer: {
        static: {
            directory: `${__dirname}/dist`,
        },
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            }
        ]
    },
}