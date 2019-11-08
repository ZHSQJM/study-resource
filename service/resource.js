import {HTTP} from '../utils/http-p.js'



 class resourceService extends HTTP{
	 
	 getResource(categoryId,status){
		 return this.request({
			 url:`resource/resource-by-category-id/${categoryId}`,
			 data:{
				 status: status
				 }
			 })
		 
	 }
	 
	 addResource(name,description,url,password,integral,categoryType,openId){
		 return this.request({
			 url:"resource",
			 method:"POST",
			 data:{
				 name: name,
				 description: description,
				 url: url,
				 password: password,
				 integral: integral,
				 categoryType: categoryType,
				 openId: openId
			 }
			 
		 })
	 }
	 
	 getResourceByOpenId(openId,status){
		 
		 return this.request({
			 url:"resource/get-resource",
			 data: {
				 openId:openId,
				 status:status
			 }
			
		 })
	 }
	 

	 
 }
 
 export {resourceService}