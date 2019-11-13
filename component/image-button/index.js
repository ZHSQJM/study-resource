// components/image-button/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true 
  },
  properties: {
    'openType': {
      type: String,
	  observer:function(old,newVal,changedPath){
		  console.log(old)
		    console.log(newVal)
			  console.log(changedPath)
	  }
    },
	
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
	 getUserInfo: function(event) {

	 this.triggerEvent('getuserinfo', event.detail, {})
	 }
  },
  attached() {
  
  },
  ready:function(){

  },
})
