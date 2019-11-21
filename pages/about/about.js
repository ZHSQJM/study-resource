import {
	LoginService
} from '../../service/login.js'
const login = new LoginService()
import {
	statisticsService
} from '../../service/static.js'
const statistics = new statisticsService()
Page({
  options: {
    addGlobalClass: true,
  },
  data: {
    integral: 0,
    download: 0,
    resourceId: 0,
	authorized: false,
	userInfo: null,
	userShow:true
  },
  
  onLoad: function (options) {
  	  //判断是否已经授权
   this.userAuthorized();
    var token = wx.getStorageSync('token') || []
   	   if(token){
  this.getStatic(token);
          }else{
			 wx.showToast({
			   title: 'token过期请重新授权',
			   icon: "none",
			   duration: 2000
			 })
		  }
  },
 userAuthorized() {
     wx.getSetting({
       success: data => {
         if (data.authSetting['scope.userInfo']) {
           wx.getUserInfo({
             success: data => {
               this.setData({
                 authorized: true,
                 userInfo: data.userInfo
               })
             }
           })
         }
       }
     })
   },
   
   getStatic(openId){
	   console.log(openId)
		   statistics.getPersonal(openId).then(res=>{
			   
			      console.log(res.integral);
		   		  this.setData({
					  integral:res.integral,
					  download: res.download,
					  resourceId: res.resourceId,
				  })
		   })
	  
   },
 
   onGetUserInfo(event) {
     const userInfo = event.detail.userInfo
     console.log(userInfo);
     if (userInfo) {
       this.setData({
         userInfo,
         authorized: true
       })
     }
	wx.login({
		success: res=>{
			var code = res.code;
			 console.log(code+"==");
			login.login(code,userInfo.avatarUrl,userInfo.gender,userInfo.nickName,userInfo.province).then(
			res=>{
				//设置缓存
				  wx.setStorageSync('token', res.openid);
				this.getStatic(res.openid)
			});
		}
	})
   },
   
   showQrcode() {
     wx.previewImage({
       urls: ['https://image.weilanwl.com/color2.0/zanCode.jpg'],
       current: 'https://image.weilanwl.com/color2.0/zanCode.jpg' // 当前显示图片的http链接      
     })
   },
})