import axios from 'axios'
import Nprogress from 'nprogress'
import { Notification } from 'element-ui' //提示后端接口

Nprogress.configure({ showSpinner: false })
const request = axios.create({
  baseURL: process.env.VUE_APP_Proxy,
  timeout: 12000,
  headers: {
    'content-Type': 'application/json',
    Accept: 'application/json',
  },
})

//请求拦截器
request.interceptors.request.use(
  (config) => {
    Nprogress.start()
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

//响应拦截器
request.interceptors.response.use(
  (response) => {
    Nprogress.done()
    return handleReponse(response)
  },
  (error) => {
    Nprogress.done()
    return Promise.reject(error)
  }
)

function handleReponse(response) {
  if (response.data && parseInt(response.data.code) <= 400) {
    return response.data
  } else {
    switch (parseInt(response.data.code)) {
      case 0:
        break
      case 404:
        Notification.error({
          title: 'error',
          message: '后端接口网址未找到, 错误代码404',
          duration: 5000,
        })
        break
      default:
        Notification.error({
          title: 'error',
          message: '未知错误，错误代码:' + response.data.code,
          duration: 5000,
        })
    }
    return Promise.reject(
      new Error(
        response.data.code ? 'error code:' + response.data.code : 'Error'
      )
    )
  }
}
export default request
// module.exports = {
//   request,
// }
