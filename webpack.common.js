const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const webpack = require("webpack");

module.exports = {
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            attrs: [
                                ":src"
                            ],
                            interpolate: true,
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 50000,
                            name: "[name].[ext]",
                            outputPath: "./assets/fonts/"
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[contentHash].[ext]",
                            outputPath: "./assets/images/"
                        }
                    }
                ]
            },
            {
                test: /\.(webm|mp4)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "./assets/videos/"
                        }
                    }
                ]
            },
        ]
    }
};
