const app = getApp();
Page({
	data: {
		iconList: [{
			icon: 'cardboardfill',
			color: 'red',
			badge: 120,
			name: 'VR'
		}, {
			icon: 'recordfill',
			color: 'orange',
			badge: 1,
			name: '录像'
		}, {
			icon: 'picfill',
			color: 'yellow',
			badge: 0,
			name: '图像'
		}, {
			icon: 'noticefill',
			color: 'olive',
			badge: 22,
			name: '通知'
		}, {
			icon: 'upstagefill',
			color: 'cyan',
			badge: 0,
			name: '排行榜'
		}, {
			icon: 'clothesfill',
			color: 'blue',
			badge: 0,
			name: '皮肤'
		}],
		gridCol: 3,
		skin: false
	},

	onTap: function(event) {
		console.log("da");
		wx.navigateTo({
			url: "pages/list/list"
		})
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
