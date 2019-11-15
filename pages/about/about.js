import {
	LoginService
} from '../../service/login.js'
const login = new LoginService()
Page({
  options: {
    addGlobalClass: true,
  },
  data: {
    starCount: 0,
    forksCount: 0,
    visitTotal: 0,
	authorized: false,
	userInfo: null,
	userShow:true
  },
  
  onLoad: function (options) {
  	  //判断是否已经授权
   this.userAuthorized();
  	  
          
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
 
   onGetUserInfo(event) {
     const userInfo = event.detail.userInfo
     // login(code,avatarUrl,gender,nickName,province){
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
			login.login(code,userInfo.avatarUrl,userInfo.gender,userInfo.nickName,userInfo.province).then();
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