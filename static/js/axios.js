import axios from 'axios'


// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// 创建实例时设置配置的默认值

let instance = axios.create({
    baseURL: 'http://127.0.0.1:8888/api/private/v1/',
    timeout: 1000
    // headers: {'Authorization': 'token'}
  });

  // 在实例已创建后修改默认值
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log('-----请求之前----',config)
    config.headers.Authorization = "12131213132"
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log('------数据响应-----',response)
    return response;
  }, function (error) {
    console.log('------数据错误-----',error)
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default instance;