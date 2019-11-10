import {
	categoryService
} from '../../service/category.js'
const category = new categoryService()


Page({

  /**
   * 页面的初始数据
   */
  data: {
      categorys:[],
      searching: false,
  },



 //跳转到相对应的资源分类列表页面
  onTap:function(event){
    let id = event.detail.id;
    wx.navigateTo({
		url:"/pages/list/list?id="+id
	  })
  },

  onSearching(event) {
    this.setData({
      searching: true
    })
  },
   //取消返回主页
  onCancel(event) {
    this.setData({
      searching: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
	  //获取类目
     category.getCategory().then(res=>{
       this.setData({ categorys:res})
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