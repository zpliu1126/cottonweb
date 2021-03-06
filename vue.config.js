const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
// var targetURL = 'http://cotton.hzau.edu.cn:80/web'
// var targetURL = 'http://localhost:8081'
module.exports = {
  // publicPath: 'https://zpliu1126.github.io/About',
  // publicPath: 'http://cotton.hzau.edu.cn/web/public/cottonweb',
  devServer: {
    sockHost: 'http://localhost:8080/', // 配置开发环境地址
    disableHostCheck: true,
    public: 'http://localhost:8080/',
    proxy: {
      //代理服务器访问目标服务器，解决开发过程中跨域问题
      '/api': {
        target: 'http://cotton.hzau.edu.cn:80/web',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
  configureWebpack: {
    name: 'cottonWeb',
    resolve: {
      alias: {
        '@': resolve('src'), //给源代码配置别名
      },
    },
  },
}
