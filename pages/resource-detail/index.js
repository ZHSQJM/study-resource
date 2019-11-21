import {resourceService} from '../../service/resource.js'
const resource = new resourceService()

import {exchangerService} from '../../service/exchanger.js'
const exchanger = new exchangerService()
Page({

  /**
   * 页面的初始数据
   */
  data: {
       resource:Object,
	   isPassword:false,
	   isMoadl:false,
	   token:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  const id =options.id;
	  this.setData({
		  token:wx.getStorageSync('token') || []
	   })
	   
	   let _token = this.data.token;
	  	   if(_token){
	  	    resource.findResourceById(_token,id).then(res=>{
	  	       if(res.password!=null){
	  	    		this.setData({isPassword:true})
	  	    	}
	  	    	this.setData({resource:res})
	  	    })
		  }else{
	  		   wx.showToast({
	  		     title: 'token过期请重新授权',
	  		     icon: "none",
	  		     duration: 2000
	  		   })
	  	   }
  },
  
  
  exchange:function(event) {
	   let _token = this.data.token;
	  wx.showModal({
	    title: '兑换',
	    content: '确定要兑换吗？',
	    cancelText: '取消',
	    confirmText: '确定',
	    success: res => {
			console.log("1123")
	        exchanger.exchangerRecords(_token,this.data.resource.id,this.data.resource.integral).then(res=>{
	    	this.data.resource.password = res;
	    	this.setData({isPassword:true,resource:this.data.resource})
	   })
  },
  })
  },
  
  copy:function(event){
	 let data =  this.data.resource.url;
	 console.log(data+"===")
	   wx.setClipboardData({
	    data: data,
	    success: function (res) {
	     wx.showModal({
	      title: '提示',
	      content: '复制成功',
	      success: function (res) {
	       if (res.confirm) {
	        console.log('确定')
	       } else if (res.cancel) {
	        console.log('取消')
	       }
	      }
	     })
	    }
	   });
  },
  
  hideModal:function(event){
	   let isModal = event.detail.isModal;
	   this.setData({
	   		  isMoadl:isModal
	   })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})