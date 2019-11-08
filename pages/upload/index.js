const app = getApp();
import {
	categoryService
} from '../../service/category.js'

import {resourceService} from '../../service/resource.js'

const category = new categoryService()
const resource = new resourceService()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    index: null,
    picker: [],
    imgList: [],
    modalName: null,
    textareaAValue: '',
    textareaBValue: ''
  },









  
  onLoad: function (options) {
  	  //获取类目
     category.getCategory().then(res=>{
  		 this.setData({picker:res})
		 console.log(this.data.picker)
		
  	 })  
  },

  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },


formSubmit: function(e) {
	
	console.log(e);
	resource.addResource(e.detail.value.name,e.detail.value.description,e.detail.value.url,e.detail.value.password,e.detail.value.integral,"6587834690286260224","orwI44zPZZNYGpZ4ERTcZjYE9SAM").then(res =>{
	wx.navigateTo("pages/myrcord/index")
	});
	
	},






  ChooseImage() {
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '召唤师',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
  textareaBInput(e) {
    this.setData({
      textareaBValue: e.detail.value
    })
  }
})