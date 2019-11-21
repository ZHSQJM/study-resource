import {HTTP} from '../utils/http-p.js'



 class statisticsService extends HTTP{
	 
	 getPersonal(openId){
		 return this.request({
			 url:'statistics/personal',
			 data:{
				 openId:openId
			 }
			 })
		 
	 }
	 

	 
 }
 
 export {statisticsService}