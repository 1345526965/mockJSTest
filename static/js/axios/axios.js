import Vue from 'vue'
import axios from 'axios'
let host = process.env.NODE_ENV === 'development' ? '/api' : process.env.API_ROOT
// axios.defaults.baseURL = host
console.log('------host------',host)
var config = {
  // 全站域名链接
  commomUrl: document.location.protocol + '//' + document.domain 
}
var instance = axios.create({
    baseURL:'http://127.0.0.1:8888/api/private/v1/',
    timeout: 1000
  });
  // Vue.prototype.$axios = axios
  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    
    let userInfo =JSON.parse(localStorage.getItem("userInfo")) 
    if(userInfo){
      console.log('-----是否携带token------',userInfo.token)
        config.headers['token'] = userInfo.token

    }
    console.log('------config------',config)
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  if(response.data.code == '40029'){
    ElementUI.MessageBox({
      title: '二维码过期',
      message: '请重新扫码'
    })
    localStorage.removeItem('userInfo')
    next('/')
 }
    errorCode(response.data.code)
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


 // 全局错误码
function errorCode ( code) {
  if (code == 2) {
    errorfn({
      r_code: code,
      mes: '参数不全'
    })
    return false
  } else if (code == 3) {
    errorfn({
      r_code: code,
      mes: '空的数据结果'
    })
    return false
  } else if (code == 4) {
    message('账号未注册')
    errorfn({
      r_code: code,
      mes: '空的数据结果'
    })
    return false
  } else if (code == 5) {
    message('密码错误，请重新输入')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 6) {
    if (res.data.user_type == 2) {
      var userInfo = {
        csid: res.data.csid, // 用户id
        token: res.data.token, // 用户token
        time: 7200, // 有效时间
        date: Date.parse(new Date()), // 保存时间
        isAudit: true // 是否需要填写资料
      }
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      message('请填写详细资料')
      setTimeout(function () { This.$router.push({path: '/Datapage'}) }, 1000)
      return false
    } else {
      message(This, '账号审核中')
      errorfn({
        r_code: code,
        mes: '登录失败'
      })
      return false
    }
  } else if (code == 7) {
    message(This, '禁止登录')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 8) {
    errorfn({
      r_code: code,
      msg: '系统异常，redis设置异常'
    })
    return false
  } else if (code == 9) {
    message(This, '退出登录失败，请刷新重试')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 10) {
    message(This, '登录失败，请刷新重试')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 11) {
    errorfn({
      r_code: code,
      msg: '处理结果异常'
    })
    return false
  } else if (code == 12) {
    message(This, '不存在的用户数据')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 13) {
    message(This, '重复')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 1001) {
    message(This, '登录信息失效，请重新登录')
    localStorage.removeItem('userInfo')
    This.$router.push('/')
    return false
  } else if (code == 1002) {
    errorfn({
      r_code: code,
      msg: '服务器拒绝访问，怀疑爬取的数据'
    })
    return false
  } else if (code == 1003) {
    message(This, '登录信息失效，请重新登录')
    localStorage.removeItem('userInfo')
    This.$router.push('/')
    return false
  } else if (code == 1004) {
    var userInfo = {
      csid: res.data.csid, // 用户id
      token: res.data.token, // 用户token
      time: 7200, // 有效时间
      date: Date.parse(new Date()) // 保存时间
    }
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    message('请填写详细资料')
    // setTimeout(function () { This.$router.push({path: '/Datapage'}) }, 1000)
    return false
  } else if (code == 1005) {
    // console.log(1)
    // This.$route.push({name: 'Login'})
    message('账号暂时无法登录')
    // errorfn({
    //   r_code: code,
    //   mes: '登录失败'
    // })
    return false
  } else if (code == 1006) {
    message('登录信息失效，请重新登录')
    localStorage.removeItem('userInfo')
    // This.$router.push('/')
    return false
  } else if (code == 1007) {
    message('非企业负责人，无法更改企业信息')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 20) {
    message('手机号码有误')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 21) {
    message('验证码数量超出当天上限')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 22) {
    message('发送太频繁，请等会儿发送')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 23) {
    errorfn({
      r_code: code,
      msg: '出错，系统接口级别'
    })
    return false
  } else if (code == 30) {
    message('注册手机号已存在')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 31) {
    message('验证码已失效')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 32) {
    message('密码太短了')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 33) {
    message('验证码过期或不存在的验证码，请重新获取')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 34) {
    message('账号注册失败了')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 35) {
    message(res.data.msg)
    errorfn({
      r_code: code,
      mes: res.data.msg
    })
    return false
  } else if (code == 36) {
    message('权限不够！禁止操作企业主账号')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 40) {
    message('非企业用户无需填写企业资料')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 50) {
    message('文件超出最大限制')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 100) {
    message('不存在的信息')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 101) {
    message('数据库不存在该字段，请联系管理员设置')
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  } else if (code == 500) {
    errorfn({
      r_code: code,
      mes: '登录失败'
    })
    return false
  }
}
  // 错误代码提示
  function errorfn(params){
    message({
          message: params.mes,
          type: params.r_code, 
    })
  }
  // 消息提示
function message (mes) {
  alert(mes, '消息', {
    confirmButtonText: '确定',
    callback: action => {
    }
  })
}
export default instance