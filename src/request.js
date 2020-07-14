//config request
import axios from 'axios'
import qs from 'qs'
import {getToken} from './components/Controller/userController'

/**
 *
 * parse error response
 */
function parseError(messages) {
  // error
  if (messages) {
    if (messages instanceof Array) {
      return Promise.reject({ messages: messages })
    } else {
      return Promise.reject({ messages: [messages] })
    }
  } else {
    return Promise.reject({ messages: ['error parseError'] })
  }
}

/**
 * parse response
 */
function parseBody(response) {
  if (response.status === 200) {
    return response.data
  } else {
    return this.parseError(response.data.messages)
  }
}

/**
 * axios instance
 * Tạo mới 1 hình cho axios
 */
let instance = axios.create({
  baseURL: 'https://localhost:3000/',
  timeout: 50000,
  paramsSerializer: function (params) {
    return qs.stringify(params, { indices: false })
  }
})
// interceptors phương thức gửi cấu hình trước khi gọi request tới server
// request header
instance.interceptors.request.use((config) => {
  // console.log(config);
  // Do something before request is sent
  config.headers = {
    Authorization: getToken(config.url),
    //'Accept-Language': 'vi'
  }
  return config
}, error => {
  return Promise.reject(error)
})
// nội dung trả về
// response parse
instance.interceptors.response.use((response) => {
  if (response.data.err === 200) {
    return parseBody(response)
  } else {
    if (response.data.logout) {
      window.location.href = "/login"

    }
    return parseBody(response)
  }
}, error => {
  // console.warn('Error status', error.response.status)
  if (error.response) {
    return parseError(error.response.data)
  } else {
    return Promise.reject(error)
  }
})

export const request = instance

// 400 : lỗi req không hợp lệ
// 401: lỗi quyền ko hợp lệ
// 404: lỗi không tìm thấy
// 500: lỗi server