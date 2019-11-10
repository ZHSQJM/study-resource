import { resourceService } from '../../service/resource.js'
const resource = new resourceService()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    q:'',
    pageNo:1,
    pageSize:10,
    elements:[],
  },

  /**
   * 组件的方法列表
   */
  methods: {
   
    //取消返回主页
    onCancel(event) {
      //this.initialize()
      this.triggerEvent('cancel', {}, {})
    },

    //点击搜索
    onConfirm(event) {
      const q =event.detail.value
      console.log(event)
       this.setData({
         q:q
       })
      resource.getResource(this.data.pageNo, this.data.pageSize, q, "", "", 0).then(res =>{
        this.setData({
          elements: res.content,
        })
        
     } 
      )
    },
    
  }
})
