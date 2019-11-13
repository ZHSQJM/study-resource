import {HTTP} from '../utils/http-p.js'



 class exchangerService extends HTTP{
	
	
	 //兑换资源
	 exchangerRecords(openId,id,integral){
		 return this.request({
		 			 url:"exchanger",
					 method:"POST",
		 			 data: {
		 				 userId:openId,
		 				 resourceId:id,
						 integral:integral
		 			 }
		 			
		 })
	 }
  
  getExchangerRecords(openId,pageNo,pageSize){
    return this.request({
      url: "exchanger/get-exchanger-records",
      method: "GET",
      data: {
        openId: openId,
        pageNo: pageNo,
        pageSize: pageSize
      }

    })
  }


	
	 

	 
 }
 
 export {exchangerService}