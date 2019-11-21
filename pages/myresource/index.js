import {resourceService} from '../../service/resource.js'

const resource = new resourceService()
Page({

  data: {
    id: null,
    elements: [],
    pageNo: 1,
    pageSize: 10,
    total: null,
    noneResult: false,
    loading: false,
    loadingCenter: false
  },

  onReachBottom() {


   var token = wx.getStorageSync('token') || [];
	   if(token){
		this.setData({
		  pageNo: this.data.pageNo + 1
		})
		if (this.data.elements.length >= this.data.total) {
		  return;
		}
		resource.getResource(this.data.pageNo, this.data.pageSize, "", token, "", 0).then(res => {
		  const tempArray = this.data.elements.concat(res.content);
		  this.setData({
		    elements: tempArray
		  })
		  this._hideLoadingCenter();
		})
	   }else{
		   wx.showToast({
		     title: 'token过期请重新授权',
		     icon: "none",
		     duration: 2000
		   })
	   }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id;
    this.setData({
      id
    })
    resource.getResource(this.data.pageNo, this.data.pageSize, "", "orwI44zPZZNYGpZ4ERTcZjYE9SAM", "", 0)
      .then(res => this.setData({
        elements: res.content,
        total: res.totalElements
      }))
  },

  _showLoadingCenter() {
    this.setData({
      loadingCenter: true
    })
  },
  _hideLoadingCenter() {
    this.setData({
      loadingCenter: false
    })
  },
  initialize() {
    this.setData({
      elements: [],
      pageNo: 1,
      pageSize: 10,
      noneResult: false,
      loading: false
    })
    this.data.total = null

  },
  //当前是否是锁住的状态
  isLock() {
    return this.data.loading ? true : false
  },
  //枷锁
  locked() {
    this.setData({
      loading: true
    })
  },
  //解锁
  unlocked() {
    this.setData({
      loading: false
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})