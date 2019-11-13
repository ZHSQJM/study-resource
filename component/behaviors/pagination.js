const pagiationBev = Behavior({
	
	
	data:{
		    elements:[],
			pageNo:1,
			pageSize:10,
			total:null,
			noneResult:false,
			loading:false,
			loadingCenter:false
	},
	
	methods:{
		
		//加载更多的数据
		setMoreData(dataArray){
			
		const tempArray = this.data.elements.concat(dataArray);
		this.setData({
			elements:tempArray
		})
		},
		getCurrentStart(){
			return this.data.pageNo +1
		},
		
		setTotal(total){
			this.data.total = total;
			if(total==0){
				this.setData({
					noneResult:true
				})
			}
		},
		//是否有更多的数据需要加载
		
		
		hasMore(){
			if(this.data.elements.length >= this.data.total){
				return false;
			}else{
				return true;
			}
		},
		initialize(){
			this.setData({
			  elements:[],	
			  pageNo:1,
			  pageSize:10,
			  noneResult:false,
			  loading:false
			})
			this.data.total = null
		
		},
		//当前是否是锁住的状态
		isLock(){
			return this.data.loading?true:false
		},
		//枷锁
		locked(){
			this.setData({
				loading:true
			}) 
		},
		//解锁
		unlocked(){
		this.setData({
			loading:false
		}) 
		},
	}
})

export {pagiationBev}