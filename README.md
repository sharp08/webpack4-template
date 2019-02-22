通过 webpack-dev-server 启动一个外部项目，先将整个项目目录放在 webpack 工程的根目录下，通过 contentBase 指向该目录

entry 中的文件会被打包成 bundle

异步模块，公共模块会被打包成 chunk

treeshaking 效果会在 production 模式下根据 import 自动触发

提取公共模块在 optimization 中配置