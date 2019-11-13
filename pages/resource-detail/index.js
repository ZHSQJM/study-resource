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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id =options.id;
	resource.findResourceById('orwI44zPZZNYGpZ4ERTcZjYE9SAM',id).then(res=>{
		if(res.password!=null){
			this.setData({isPassword:true})
		}
		this.setData({resource:res})
		},
		)
  },
  
  
  exchange:function(event) {
	  this.setData({
		  isMoadl:true
	  })
	// exchanger.exchangerRecords('orwI44zPZZNYGpZ4ERTcZjYE9SAM',this.data.resource.id,this.data.resource.integral).then(res=>{
	// 	console.log(res);
	// 	this.data.resource.password = res;
	// 	this.setData({isPassword:true,resource:this.data.resource})
	// })
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