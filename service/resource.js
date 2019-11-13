import {HTTP} from '../utils/http-p.js'



 class resourceService extends HTTP{
	 


   getResource(page,pageSize,name,openId,categoryId, status) {
     return this.request({
       url: `resource/find-all-page`,
       data: {
         page: page,
         pageSize:pageSize,
         name:name,
         openId: openId,
         categoryType: categoryId,
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
	 
	 
	 findResourceById(openId,id){
		 return this.request({
		 			 url:"resource/find-resource-by-id",
		 			 data: {
		 				 openId:openId,
		 				 id:id
		 			 }
		 			
		 })
	 }
	//  getResourceByOpenId(openId,status){
	// 	 return this.request({
	// 		 url:"resource/get-resource",
	// 		 data: {
	// 			 openId:openId,
	// 			 status:status
	// 		 }
			
	// 	 })
	//  }
	 

	 
 }
 
 export {resourceService}