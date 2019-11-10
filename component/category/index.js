const app = getApp();
Component({
	options:{
		addGlobalClass:true
	},
	properties:{
		iconList:Array
	},
	data: {
		iconList: [{
			icon: 'cardboardfill',
			color: 'red',
			badge: 120,
			name: 'VR'
		}],
		gridCol: 3,
		skin: false
	},

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function(event) {
		var id = event.currentTarget.dataset.id; 
		this.triggerEvent('onTap',{
		  id:id
		},{})
	}
  }
	
})

// // component/test.js
// Component({
//   /**
//    * 组件的属性列表
//    */
//   properties: {
//       iconList:Array
//   },

//   /**
//    * 组件的初始数据
//    */
//   data: {

//   },

//   /**
//    * 组件的方法列表
//    */
//   methods: {

//   }
// })
