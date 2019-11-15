import {HTTP} from '../utils/http-p.js'



 class UploadService extends HTTP{
	 
	 upload(ImageUrl){
		 return this.request({
			 url:'upload',
			 method:'POST',
			 data:{
				file:ImageUrl ,
			 }
			 })
		 
	 }
	 

	 
 }
 
 export {LoginService}