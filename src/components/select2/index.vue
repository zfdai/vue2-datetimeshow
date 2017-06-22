<template>
	<div class="zf-select2 relative" v-clickoutside="clickoutside" :class="className" :style="styleObj">
		<div class="select2-wrapper" :class="{focus:isFocus,multiple:multiple}" @click="toggleMenu">
			<span class="tag" v-for="(item,index) in multipleList">
				{{item.label}}
				<em class="mult-clear" @click.stop="multClear(index)">x</em>
			</span>
			<input 
			:class="{'input-mult-none':multipleListVal.length!=0}" 
			v-show="!(multiple&&multipleListVal.length>0&&!filterable)"
			:diabled="disabled"
			v-model="query"
			:placeholder="multipleListVal.length==0?placeholder:''" 
			:readonly="!filterable" 
			type="text"/>
			<i class="down-arrow" :class="{open:showDropdown}" v-if="!remote"></i>
			<i class="icon-clear" :class="{dropdown:!remote}" v-if="showClearable">
				<span @click.stop="clearQuery">x</span>
			</i>
		</div>
		<transition name="fade">
			<div class="select2-options" v-show="showDropdown">	
				<ul>
					<li v-for="(item,index) in filterOptions" :key="new Date()" :class="{active:(prevData&&item.value==prevData.value)||(value==item.value&&!multiple),'mult-active':multipleListVal.includes(item.value)}" @click.stop="onChange(item)">{{item.label}}</li>
				</ul>
				<div class="no-more-data" v-show="!isLoading&&(isDataOver||filterOptions.length==0)">
					{{filterOptions.length!=0?scrollBottomTxt?scrollBottomTxt:noMoreData:noMatchTxt?noMatchTxt:noFilterData}}
				</div>
				<div class="loading" v-show="isLoading&&!isDataOver">loading...</div>
			</div>
		</transition> 
	</div>
</template>
<style scoped>
	input::-webkit-input-placeholder{
		color:#bbb;
	}
	input::-ms-input-placeholder{
		color:#bbb;
	}
	.multiple input{
		line-height: 1;
		padding-left: 0;
	}
	.multiple input.input-mult-none{
		display: none;
	}
	.focus.multiple input.input-mult-none{
		display: block;
	}
	.select2-options li.mult-active{
		color:rgba(45,140,240,.9);
	}
	.select2-options li.mult-active:hover{
		color:rgba(45,140,240,.9);
		background: #f3f3f3;
	}
	.multiple>.tag{
		margin:3px 4px 2px 0;
		cursor: pointer;
		display: inline-block;
		line-height: 1;
		font-style: normal;
		padding:5px;
		border-radius: 4px;
		font-size: 12px;
		background: #e9eaec;
	}
	.multiple .tag .mult-clear{
		margin-left: 5px;
		display: inline-block;
		transition: background .2s , color .2s;
	}
	.multiple .tag .mult-clear:hover{
		color:#5cadff;
		transition: background .2s , color .2s;
	}
	.multiple{
	    flex-wrap: wrap;
	    min-height: 40px;
	    box-sizing: border-box;
	    padding-left: 10px;
	}
	.multiple>input{
		width: 100px;
	}
	.loading,
	.no-more-data{
		height:40px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 12px;
		color:#999;
	}
	.select2-options li{
		font-size: 14px;
		padding:7px 16px;
		color: #657180;
		line-height: 1.4;
		white-space: nowrap;
		border-bottom: solid 1px #fff;
		cursor: pointer;
		transition: background .3s,color .3s;
	}
	.select2-options li:hover,
	li.active{
	    background: #638CA5;
	    color: #fff;
	}
	.select2-options li:hover{
		transition: background .3s,color .3s;
	}
	.open.down-arrow{
		transform: rotateZ(180deg);
		transition: transform .4s;
	}
	.down-arrow{
		position: absolute;
		z-index: 90;
		height: 0;
		border-left: solid 4px transparent;
		border-right: solid 4px transparent;
		border-top: solid 6px #000;
		right: 10px;
		transition: transform .4s;
	}
	.icon-clear{
		font-style: normal;
		font-size: 12px;
		position: absolute;
		z-index: 98;
		height: 100%;
		right: 10px;
		display: flex;
		align-items: center;
	}
	.icon-clear>span{
		cursor: pointer;
		display: flex;
		width: 16px;
		height: 16px;
		border-radius: 8px;
		justify-content: center;
		align-items: center;
		transition: background .2s,color .2s;
	}	
	.icon-clear>span:hover{
		background: #638CA5;
		color:#fff;
		transition: background .2s,color .2s;
	}
	.dropdown.icon-clear{
		right: 25px;
	}
	.relative{
		position: relative;
		z-index: 2;
	}
	.select2-options{
		position: absolute;
		z-index: 100;
		width: 100%;
		padding-bottom: 10px;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}
	.fade-enter-active, .fade-leave-active {
	  	transition: opacity .5s , height .2s;
	  	max-height:200px;
	}
	.fade-enter, .fade-leave-active {
		transition: opacity .5s , height .2s;
	  	opacity: 0;
	  	max-height:200px;
	}
	.select2-wrapper{
		display: flex;
		background: #fff;
	    align-items: center;
	    border-radius: 4px;
	    overflow: hidden;
	    border:solid 1px #d7dde4;
	    transition: border-color .2s,box-shadow .2s;
	}
	.select2-wrapper.focus{
		border-color: #5cadff;
	    box-shadow: 0 0 2px #5cadff;
		transition: border-color .2s,box-shadow .2s;
	}
	input{
		line-height: 1.5;
		padding:4px 7px;
		height: 38px;
		border:none;
		color:#657180;
	}
	input[readonly]{
    	cursor: pointer;
    	border: none;
	}
	input:focus{
		outline: none;
	}
	input,select2-options{
		width:100%;
	}
	.select2-options{
		max-height: 200px;
		overflow-y:auto;
		background: #fff;
		border:solid 1px #d7dde4;
		box-sizing: border-box;
	}
	ul,li{
		list-style: none;
		margin:0;
		padding:0;
	}
</style>
<script>
	import clickoutside from './clickoutside.js'
	export default {
		directives: { clickoutside },
		data(){
			return{
				isDebug:false,
				labelValueFirst:true,
				isInitValue:true,
				// 多选列表
				multipleList:[],
				isFocus:false,
				// 上次点击值
				prevData:null,
				// 是否监听
				noQuery:false,
				// 是否为脏数据
				isDirty:false,
				noFilterData:'没有查找到数据！',
				noMoreData:'没有更多数据了！',
				// 表态数据
				staticOpts:null,
				cloneOpts:null,
				isDataOver:false,
				query:'',
				isClear:false,
				styleObj:{
					'z-index':this.zIndex
				},
				showDropdown:false,
				filterOptions:[]
			}
		},
		created(){
			// 初始化
			this.staticOpts = this.options;
			if(this.initLabelValue){
				this.labelValue(JSON.parse(JSON.stringify(this.initLabelValue)));
			}
		},
		mounted(){
			if(this.remote&&this.listenScroll){
				this.listenScrollMethod();
			}
		},
		computed:{
			multipleListVal:function(){
				let _temp = [];
				this.multipleList.forEach((item,index)=>{
					_temp.push(item.value)
				})
				return _temp;
			},
			showClearable:function(){
				return this.clearable&&this.query&&!this.multiple;
			},
			isLoading:function () {
				return this.loading;
			}
		},
		props:{
			backParamsData:{
				type:[String,Array,Function,Object],
				default:''
			},
			initLabelValue:{
				type: Array
			},
			multiple:{
                type: Boolean,
                default: false
            },
			placeholder:String,
			noMatchTxt:String,
			scrollBottomTxt:String,
			listenScroll:Boolean,
			disabled: {
                type: [Boolean,String],
                default: false
            },
			loading:Boolean,
			remoteMothed:Function,
			clearable: {
                type: Boolean,
                default: false
            },
			zIndex:[Number,String],
			className:{
				type:String
			},
			remote: {
                type: Boolean,
                default: false
            },
			value:{
                type: [String, Number, Array],
                default: ''
            },
			options:{
				type:Array
			},
			filterable:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			// 多选删除
			multClear(index){
				this.isDebug&&console.log('multClear...')
				this.multipleList.splice(index,1);
				this.isInitValue = false;
				this.$emit('input',this.multipleListVal);
				this.$nextTick(_=>{
					this.isInitValue = true;
				})
			},
			// 监听滚动
			listenScrollMethod(){
				this.isDebug&&console.log('listenScrollMethod...')
				// console.log('select2-scroll...')
				// console.log(this.$el.querySelectorAll('.select2-options'));
				let _scrollWrap = this.$el.querySelectorAll('.select2-options')[0],
					_contentWrap = _scrollWrap.querySelectorAll('ul')[0]||{};
				_scrollWrap.onscroll = (e)=>{
					// console.log('scroll-evt...')
					// console.log('e.target.scrollTop',e.target.scrollTop)
					// console.log('_scrollWrap.clientHeight',_scrollWrap.clientHeight)
					// console.log('_contentWrap.clientHeight',_contentWrap.clientHeight)
					if(e.target.scrollTop+_scrollWrap.clientHeight==_contentWrap.clientHeight){
						if(!this.isDataOver){
							this.$emit('scrollBottom',this.filterOptions,this.query,this.dataOver,this.backParamsData)
						}
					}
				}
			},
			// 分页数据结束
			dataOver(){
				this.isDebug&&console.log('dataOver...')
				// console.log('set isDataOver')
				this.isLoading = false;
				this.isDataOver = true;
			},
			setQuery(){
				this.isDebug&&console.log('setQuery...')
				if(this.showDropdown){
					return;
				}
				if(this.remote){
					// console.log('remote loading...');
					// console.log('this.query',this.query)
					if(this.query){
						this.showDropdown = true;
						// this.$el.querySelectorAll('.select2-options')[0].scrollTop = 0;
						// 重新请求数据
						this.filterOptions = [];
						this.$nextTick(()=>{
							this.$emit('remote-mothed',this.query,this.backParamsData);
						})
					}
				}else{
					if(this.query&&this.filterable){
						this.filterList(this.staticOpts);
					}else{
						this.filterOptions =  this.staticOpts;
					}
				}
			},
			clearQuery(){
				this.isDebug&&console.log('clearQuery...')
				this.isClear = true;
				this.isInitValue = false;
				this.query = '';
				this.$emit('input','');
				this.$emit('on-change',{},this.backParamsData);
				this.showDropdown = false;
				this.prevData = null;
				// 清空时  不再显示下拉
				this.$nextTick(()=>{
					this.isClear = false;
					this.isInitValue = true;
				})
			},
			clickoutside(e){
				this.isDebug&&console.log('clickoutside...')
				this.isFocus = false;
				this.showDropdown = false;
				// 脏数据时  赋值前一次值
				this.isDebug&&console.log('this.isDirty',this.isDirty)
				if(this.isDirty){
					this.noQuery = true;
					this.isInitValue = false;
					if(this.multiple){
						this.query = '';
					}else{
						if(this.prevData){
							this.query = this.prevData.label;
							this.$emit('input',this.prevData.value);
						}else{
							this.query = '';
							this.$emit('input','');
						}
					}
					this.$nextTick(()=>{
						this.isInitValue = true;
						this.noQuery = false;
					})
				}
			},
			toggleMenu(e){
				this.isDebug&&console.log('toggleMenu...')
				this.isFocus = true;
				this.setQuery();
				if(this.multiple&&this.filterable&&!this.showDropdown){
					setTimeout(()=>{
						e.target.parentNode.querySelectorAll('input')[0].focus();
					},10)
				}
				if(!this.remote){
					this.showDropdown = !this.showDropdown;
				}else if(this.listenScroll){
					this.isDataOver = false;
				}
			},
			onChange(item){
				this.isDebug&&console.log('onChange...')
				// console.log('onchange....')
				this.noQuery = true;
				this.isInitValue = false;
				this.query = this.multiple?this.query:item.label;
				if(!this.multiple){
					this.isFocus = false;
					this.prevData = item;
					this.showDropdown = false;
					this.$emit('input',item.value)
					this.$emit('on-change',item,this.backParamsData);
					this.isDirty = false;
				}else{
					let _is_exist = false;
					this.multipleList.forEach((item2,index2)=>{
						if(item2.value==item.value){
							this.multipleList.splice(index2,1);
							_is_exist = true;
						}
					})
					if(!_is_exist){
						this.multipleList.push(item);
					}
					//传递数据到父组件 
					this.$emit('input',this.multipleListVal)
					this.$emit('on-change',this.multipleList,this.backParamsData);
					// 点击之后 赋值所有
					if(this.filterable){
						// if(!this.remote){
						// 	// this.filterOptions = this.staticOpts;
						// }
						this.$el.querySelectorAll('input')[0].focus();
					}
				}
				this.$nextTick(()=>{
					this.noQuery = false;
					this.isInitValue = true;
				})
			},
			// 过滤数据
			filterList(list){
				this.isDebug&&console.log('filterList...')
				if(this.query){
					list.filter(item=>item.label.toLowerCase().indexOf(this.query.toLowerCase())>-1);
				}
			},
			// 初始化多选 -静态数据
			initMult(val){
				this.isDebug&&console.log('initMult...')
				this.staticOpts.forEach((item,index)=>{
					if(val.indexOf(item.value)>-1){
						this.multipleList.push(item)
					}
				})
			},
			// 初始化单选 -静态数据
			initSingle(val){
				this.isDebug&&console.log('initSingle...')
				this.staticOpts.forEach((item,index)=>{
					if(val==item.value){
						this.query = item.label;
					}
				})
				this.$nextTick(()=>{
					this.noQuery = false;
				})
			},
			// 搜索 初始化
			labelValue(val){
				this.isDebug&&console.log('labelValue...',val)
				if(!this.labelValueFirst) {
					this.isInitValue = false;
					return;
				}
				if(this.multiple&&val.length>0){
					this.multipleList = JSON.parse(JSON.stringify(val));
					this.isInitValue = false;
					this.$emit('input',this.multipleListVal)
					this.$nextTick(_=>{
						this.isInitValue = true;
					})
				}else{
					this.noQuery = true;
					if(val instanceof Array && val.length>0){
						this.query = val[0].label;
						this.$emit('input',val[0].value)
						// console.log('val[0].value',val[0].value)
						this.prevData = val[0];
						// console.log('prevData',this.prevData)
					}
					this.$nextTick(()=>{
						this.noQuery = false;
						this.isDirty = false;
					})
				}
				this.labelValueFirst = false;
			}
		},
		watch:{
			// 监听 搜索 初始化
			initLabelValue:function(val){
				this.isDebug&&console.log('watch-initLabelValue...')
				this.labelValue(JSON.parse(JSON.stringify(val)));
			},
			value:function(val){
				this.isDebug&&console.log('watch-value...')
				this.isDebug&&console.log('warch-value',val)
				if(this.isInitValue){
					// console.log('&this.staticOpts',this.staticOpts)
					if(this.multiple&&this.staticOpts.length>0){
						this.initMult(val);
					}
					if(!this.multiple&&this.staticOpts.length>0){
						this.initSingle(val);
					}
					// 外部清空操作
					this.isDirty = false;
					// 多选清空
					if(val instanceof Array){
						if(val.length==0){
							this.multipleList = [];
							this.query = '';
						}
					}else 
					// 单选清空
					if(val==''||val==null){
						// 防止outclick 覆盖回原先的值
						this.query = '';
						this.prevData = null;
					}
				}
			},
			// 列表值监听
			options:function(val){
				this.isDebug&&console.log('watch-options...')
				this.cloneOpts = JSON.parse(JSON.stringify(val));
				this.filterList(this.cloneOpts);
				// 表态数据不变
				if(!this.remote){
					this.staticOpts = this.options;
					// console.log('this.value...',this.value)
					// 多选赋值
					if(this.value&&this.multiple&&this.value.length>0&&this.isInitValue){
						this.initMult(this.value);
					}
					// 单选赋值
					if(this.value&&!this.multiple&&this.isInitValue){
						this.initSingle(this.value);
					}
				}else{
					// console.log('this.filterOptions',this.filterOptions)
					this.filterOptions = this.cloneOpts;
				}
			},
			query:function(val){
				this.isDebug&&console.log('watch-query...')
				if(!this.isInitValue){
					this.isDirty = true;
				}
				this.isDebug&&console.log('watch-query...this.isInitValue',this.isInitValue)
				this.isDebug&&console.log('watch-query...',this.isDirty)
				// console.log('this.noQuery',this.noQuery)
				// query 赋值时不进行监听
				if(this.noQuery)return;
				if(val){
					// 定义远程
					if(this.remote){
						this.filterOptions = [];
						this.$nextTick(()=>{
							this.showDropdown = true;
							this.$emit('remote-mothed',val,this.backParamsData);
						})
					}else{
						// 死数据
						this.filterList(this.staticOpts);
					}
					// console.log('this.filterOptions',this.filterOptions)
				}else{
					// 定义没有查询值 非远程
					if(this.isClear) return;
					if(!this.remote){
						this.showDropdown = true;
						this.filterList(this.staticOpts);
					}else{
						this.showDropdown = false;
						this.filterOptions = [];
					}
				}
			}
		}
	}
</script>