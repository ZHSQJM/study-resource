import {HTTP} from '../utils/http-p.js'



 class LoginService extends HTTP{
	 
	 login(code,avatarUrl,gender,nickName,province){
		 return this.request({
			 url:'wei-xin/wxLogin',
			 method:'POST',
			 data:{
				code: code,
				avatarUrl: avatarUrl,
				gender: gender,
				nickName: nickName,
				province: province
			 }
			 })
		 
	 }
	 

	 
 }
 
 export {LoginService}