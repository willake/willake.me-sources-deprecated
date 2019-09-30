const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const SitemapWebpackPlugin = require("sitemap-webpack-plugin").default;
const paths = [
    '/',
    '/about/',
    '/porjects/escape-the-room/',
    '/porjects/escape-the-room-remake/',
    '/porjects/forest-browser-extension/',
    '/porjects/hourglass/',
    '/porjects/i-just-want-to-cook/',
    '/porjects/pinka/',
    '/porjects/secret-triangle/',
    '/porjects/snowball-rage/',
  ];

const siteUrl = "https://www.willake.me/";

module.exports = merge(common, {
        mode: "production",
        entry: {
            home: "./src/js/home.js",
            about: "./src/js/about.js",
            projects: "./src/js/projects.js"
        },
        devtool: "source-map",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].[contentHash].bundle.js",
            publicPath: "/"
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
            }),
            new SitemapWebpackPlugin(siteUrl, paths),
            new RobotstxtPlugin({
                policy: [{ userAgent: "*", allow: "*" }],
                sitemap: siteUrl + "/sitemap.xml",
                host: siteUrl
            })
        ],
        optimization: {
            minimizer: [
                new OptimizeCssAssetsWebpackPlugin({
                    cssProcessorPluginOptions: {
                        preset: [
                            "default",
                            {
                                discardComments: {
                                    removeAll: true
                                }
                            }
                        ]
                    }
                }),
                new TerserPlugin()
            ]
        },
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