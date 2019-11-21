import {config} from '../config.js'


const tips = {
  1:'抱歉，出现了一个错误',
  1000:'appkey无效',
  2000:'错误表达式1',
}
class HTTP{

	request({url,data={},method='GET'}){
	     return new Promise((resolve,reject)=>{
			this._request(url,resolve,reject,data,method)  
		  })
	}

  _request(url,resolve,reject,data={},method='GET'){
     wx.request({
       url: config.api_base_url + url,
       method: method,
       data: data,
       header:{
        'content-type':'application/json',
        'token':config.token
       },
       success:(res)=>{
        const code =res.statusCode.toString();
        if(code.startsWith('2')){
			if(res.data.code==0){
				resolve(res.data.data);
			}else{
				wx.showToast({
				  title: res.data.msg,
				  icon: "none",
				  duration: 2000
				})
			}
        }else{
			reject()
      wx.showToast({
        title: '错误',
        icon: "none",
        duration: 2000
      })
        }
       },
       fail:(err)=>{
		   	reject()
        wx.showToast({
          title: '错误',
          icon: "none",
          duration: 2000
        })
       }
     })
  }
  //私有方法
  _show_error(error_code){
    if (!error_code){
      error_code = 1;
    }
    wx.showToast({
      title: tips?tips:tip[1],
      icon: "none",
      duration: 2000
    })
  }
}

export {HTTP} 