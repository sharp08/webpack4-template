const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve(p) {
    return path.resolve(__dirname, p)
}

module.exports = {
    // mode: "development",
    entry: {
        app: resolve('../src/index.js'),
        print: resolve('../src/js/print.js')
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: '[name].chunk.[chunkhash].js',
        path: resolve("../dist"),
    },
    devServer: {
        // contentBase: resolve("../abc"),  //  如果需要启动一个外部项目，这里是目录地址，默认启动 abc/index.html
        index: 'entry.html',    //  这里与 HtmlWebpackPlugin 中 filename 对应
        port: 10240,
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|bmp)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 32000        //  单位 byte
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    optimization: {
        //  用于提取公共部分，形成 chunk
        splitChunks: {
            chunks: 'all'
        },
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerHost: '127.0.0.1',
            analyzerPort: 12031
        }),
        new HtmlWebpackPlugin({
            title: "测试 html-webpack-plugin",
            filename: "entry.html", //  打包后输出的文件名
            template: resolve('../template.html')
        }),
        new CleanWebpackPlugin(['dist'], {
            root: resolve('../')
        })
    ]
}