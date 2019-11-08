import {HTTP} from '../utils/http-p.js'



 class categoryService extends HTTP{
	 
	 getCategory(){
		 return this.request({
			 url:'category/find'
			 })
		 
	 }
	 

	 
 }
 
 export {categoryService}