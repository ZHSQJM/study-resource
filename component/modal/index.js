// component/modal/index.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
  	addGlobalClass:true
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {


   hideModal:function(){
	this.triggerEvent('hideModal',{
	  isModal:false
	},{})
	   }
  }
})
