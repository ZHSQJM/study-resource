import { resourceService } from '../../service/resource.js'
const resource = new resourceService()
import { pagiationBev } from '../behaviors/pagination.js'
Component({
  /**
   * 组件的属性列表
   */
  
  behaviors:[pagiationBev],
  properties: {
       more:{
		   type:String,
		   observer:'loadMore'
	   }
  },

  /**
   * 组件的初始数据
   */
  data: {
    q:''
	
  },

  /**
   * 组件的方法列表
   */
  methods: {
   
    //取消返回主页
    onCancel(event) {
      this.initialize()
      this.triggerEvent('cancel', {}, {})
    },

    //点击搜索
    onConfirm(event) {
	  this._showLoadingCenter()
	  this.initialize();
      const q =event.detail.value
       this.setData({
         q:q
       })
      resource.getResource(this.data.pageNo, this.data.pageSize, q, "", "", 0).then(res =>{
		  this.setMoreData(res.content);
		  this.setTotal(res.totalElements)
        	this._hideLoadingCenter();
     } 
      )
    },
	
	loadMore(){
		if(!this.data.q){
			return
		}
		if(this.isLock()){
			return ;
		}
		if(this.hasMore()){
				this.locked();
			    resource.getResource(this.getCurrentStart(), this.data.pageSize, this.data.q, "", "", 0).then(res =>{
				this.setMoreData(res.content);
		        this.unlocked();
			
			},()=>{
				   this.unlocked();
				}) 
				
		}
		
	},
	
	
	_showLoadingCenter(){
		this.setData({
			loadingCenter:true
		}) 
	},
	_hideLoadingCenter(){
		this.setData({
			loadingCenter:false
		}) 
	},
  },
  
})
