const path = require('path')

/*
得到指定目录(项目下)的绝对路径
 */
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

/*
webpack配置
 */
module.exports = { // 配置对象
  // 入口
  entry: './src/index.js', // 入口js的相对路径
  // 出口
  output: {
    // __dirname: 当前文件所在目录的绝对路径
    path: resolve('dist'),  // 指定文件夹的绝对路径
    filename: 'bundle.js'
  },
  // 模块打包器
  module: {
    rules: [
      // 加载js
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      }
      // 加载css
      // 加载img
    ]
  },
  // 插件
  plugins: [

  ]
}