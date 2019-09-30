const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
        mode: "development",
        entry: {
            home: "./src/js/home.js",
            about: "./src/js/about.js",
            projects: "./src/js/projects.js"
        },
        output: {
            publicPath: "/"
        },
        devtool: "inline-source-map",
        devServer: {
            host: "127.0.0.1",
            port: 8000
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/pages/home/index.html",
                filename: "./index.html",
                chunks: ["home"]
            }),
            new HtmlWebPackPlugin({
                template: "./src/pages/about/index.html",
                filename: "./about/index.html",
                chunks: ["about"]
            }),
            new HtmlWebPackPlugin({
                template: "./src/pages/projects/forest-browser-extension/index.html",
                filename: "./projects/forest-browser-extension/index.html",
                chunks: ["projects"]
            }),
            new HtmlWebPackPlugin({
                template: "./src/pages/projects/pinka/index.html",
                filename: "./projects/pinka/index.html",
                chunks: ["projects"]
            }),
            new HtmlWebPackPlugin({
                template: "./src/pages/projects/escape-the-room-remake/index.html",
                filename: "./projects/escape-the-room-remake/index.html",
                chunks: ["projects"]
            }),
            new HtmlWebPackPlugin({
                template: "./src/pages/projects/snowball-rage/index.html",
                filename: "./projects/snowball-rage/index.html",
                chunks: ["projects"]
            }),
            new HtmlWebPackPlugin({
                template: "./src/pages/projects/escape-the-room/index.html",
                filename: "./projects/escape-the-room/index.html",
                chunks: ["projects"]
            }),
            new HtmlWebPackPlugin({
                template: "./src/pages/projects/hourglass/index.html",
                filename: "./projects/hourglass/index.html",
                chunks: ["projects"]
            }),
            new HtmlWebPackPlugin({
                template: "./src/pages/projects/i-just-want-to-cook/index.html",
                filename: "./projects/i-just-want-to-cook/index.html",
                chunks: ["projects"]
            }),
            new HtmlWebPackPlugin({
                template: "./src/pages/projects/secret-triangle/index.html",
                filename: "./projects/secret-triangle/index.html",
                chunks: ["projects"]
            })
        ],
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader"
                        },
                        {
                            // resolve css background img url
                            loader: "resolve-url-loader"
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                                sourceMapContents: false
                            }
                        }
                    ]
                }
            ]
        }
    });
