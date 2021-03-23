import axios from './axios'
class request {
  axiosGet(url, data) {
    return new Promise((resolve, rejest) => {
      axios.get(url, data)
        .then(function (res) {
          resolve(res)
        })
        .catch(function (error) {
          rejest(error)
        });
    })



  }
  axiosPost(url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(function (res) {
          resolve(res)
        })
        .catch(function (error) {
          reject(error)
        });
    })

  }
  asyAxiosGet() {

  }
  asyAxiosPost(url,data,headers) {
      return new Promise((resolve,reject)=>{
        axios({
            method: 'post',
            url: url,
            data,
            headers,
            success:function(res){
                resolve(res)
            },
            fail:function(error){
                reject(error)
            }
          });
      })
    
  }
  rootAxiosPost(url,data,successFun,catchFun){
    axios({
        method: 'post',
        url: url,
        data,
        success: function (res) {
          successFun(res)
        },
        fail: function (error) {
          catchFun(error)
        }
    })
  }

}
export default new request();
