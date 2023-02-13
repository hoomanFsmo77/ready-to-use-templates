const path=require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')

module.exports={
    devtool: 'source-map',
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: "app.[contenthash].js",
        assetModuleFilename: "assets/[name][ext]"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader",'postcss-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader",'postcss-loader'],
            },
            {
                test: /\.(png|svg|jpe?g)/,
                type: 'asset/resource'
            },
            {
                test: /\.(eot|ttf|woff|woff2)/,
                type: 'asset/inline'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use:["babel-loader"],
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from:'**/*',
                    context: path.resolve(__dirname, "src", "public"),
                    to:'public'
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename:"css/[name].css"
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        compress: true,
        port: 9000,
        devMiddleware:{
            writeToDisk:true
        }

    }
}