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
	iscamer:true,
    picker: [],
    imgList: [],
    modalName: null,
	token:null
  },









  
  onLoad: function (options) {
	  
	  this.setData({
	  		  token:wx.getStorageSync('token') || []
	  }),
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
	let description = e.detail.value.description;
	let url = e.detail.value.url;
	let password = e.detail.value.password;
	let integeral =e.detail.value.integral;
	let name = e.detail.value.name;
	if(name.length==0){
	 
	 return;
	}
	if(description.length==0){
	 
	 return;
	}
	if(url.length==0){
	 
	 return;
	}
	if(integeral.length==0){
	 
	 return;
	}

	resource.addResource(e.detail.value.name,e.detail.value.description,e.detail.value.url,e.detail.value.password,e.detail.value.integral,"6587834690286260224",token).then(res =>{
	wx.navigateTo("pages/myrcord/index")
	});
	
	},






  ChooseImage() {
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
		  console.log(res.tempFilePaths[0]);
		this.upload_file('http://192.168.8.65:8080/v1/api/upload', res.tempFilePaths[0])
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths),
			iscamer: false
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths,
			iscamer:false
          })
        }
		
      }
    });
  },
  
  upload_file: function (url, filePath) {
  wx.uploadFile({
  url: url,
  filePath: filePath,
  name: 'imagefile',
  header: {
  'content-type': 'multipart/form-data'
  }, // 设置请求的 header
  //formData: { 'guid':"procomment" }, // HTTP 请求中其他额外的 form data
  success: function (res) {
  console.log(res)
  },
  fail: function (res) {
	  console.log(res)
  }
  })
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
		  if(this.data.imgList.length == 0){
		  	this.setData({
		  		iscamer:true
		  	})
		  }
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