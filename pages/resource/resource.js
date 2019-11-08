
import {
	categoryService
} from '../../service/category.js'
const category = new categoryService()

Page({
  options: {
    addGlobalClass: true,
  },
  data: {
    elements: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
  	  //获取类目
     category.getCategory().then(res=>{
  		 this.setData({elements:res})
  	 })
  	  
          
  },
})