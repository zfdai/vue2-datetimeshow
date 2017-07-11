<template>
	<div class="select-wrapper">
		<div class="select2-row">
			<section>
				<pre>多选/ajax静态数据/默认</pre>
				<pre>select10Val值：{{select10Val}}</pre>
				<Select2 
					multiple
					placeholder="请选择"
					@on-change="change"
					v-model="select10Val"
					:options="staticOptionsList" 
				></Select2>
			</section>
			<section>
				<pre>多选/ajax静态数据/默认设置初始值</pre>
				<pre>select11Val值：{{select11Val}}</pre>
				<Select2 
					multiple
					placeholder="请选择"
					@on-change="change"
					v-model="select11Val"
					:options="staticOptionsList" 
				></Select2>
			</section>
			<section>
				<pre>多选/ajax静态数据/可搜索</pre>
				<pre>select12Val值：{{select12Val}}</pre>
				<Select2 
					multiple
					filterable
					placeholder="请选择"
					@on-change="change"
					v-model="select12Val"
					:options="staticOptionsList" 
				></Select2>
			</section>
			<section>
				<pre>多选/ajax静态数据/可搜索设置初始值</pre>
				<pre>select13Val值：{{select13Val}}</pre>
				<Select2 
					multiple
					filterable
					placeholder="请选择"
					@on-change="change"
					v-model="select13Val"
					:options="staticOptionsList" 
				></Select2>
			</section>
			<section>
				<pre>多选/远程数据/搜索</pre>
				<pre>select14Val值：{{select14Val}}</pre>
				<Select2 
					multiple
					filterable
					:loading="loading"
					remote
					@remote-mothed="remoteMethod"
					placeholder="请输入查询"
					@on-change="change"
					v-model="select14Val"
					:options="optionsList" 
				></Select2>
			</section>
			<section>
				<pre>多选/远程数据/搜索/初始化</pre>
				<pre>select15Val值：{{select15Val}}</pre>
				<Select2 
					multiple
					filterable
					:init-label-value="[{value:0,label:'自定义显示值0'}]"
					:loading="loading"
					remote
					@remote-mothed="remoteMethod"
					placeholder="请输入查询"
					@on-change="change"
					v-model="select15Val"
					:options="optionsList" 
				></Select2>
			</section>
			<section>
				<pre>多选/远程数据/搜索/分页</pre>
				<pre>select16Val值：{{select16Val}}</pre>
				<Select2 
					multiple
					filterable
					:loading="loading"
					remote
					@remote-mothed="remoteMethod"
					listenScroll
					@scrollBottom = "scrollBottom"
					placeholder="请输入查询"
					@on-change="change"
					v-model="select16Val"
					:options="optionsList" 
				></Select2>
			</section>
			<section>
				<pre>多选/远程数据/搜索/分页/初始化</pre>
				<pre>select17Val值：{{select17Val}}</pre>
				<Select2 
					multiple
					filterable
					:loading="loading"
					:init-label-value="initLabelValue1"
					remote
					@remote-mothed="remoteMethod"
					listenScroll
					@scrollBottom = "scrollBottom"
					placeholder="请输入查询"
					@on-change="change"
					v-model="select17Val"
					:options="optionsList" 
				></Select2>
			</section>
		</div>
		<!-- 单选 -->
		<div class="select2-row">
			<section>
				<pre>单选/远程搜索/分页/赋值</pre>
				<pre>select1Val值：{{select1Val}}</pre>
				<Select2 
					:init-label-value="initLabelValue2"
					className="select2-1"	
					zIndex = '222'	
					clearable
					@on-change="change"
					remote
					:loading="loading"
					placeholder="请输入查询"
					@remote-mothed = 'remoteMethod'
					v-model="select1Val"
					:options="optionsList" 
					:filterable="true"
					listenScroll
					@scrollBottom = "scrollBottom"
					scrollBottomTxt="数据已加载全部！"
				></Select2>
			</section>
			<section>
				<pre>单选/远程搜索/分页</pre>
				<pre>select2Val值：{{select2Val}}</pre>
				<Select2 
					className="select2-1"	
					zIndex = '222'	
					clearable
					@on-change="change"
					remote
					:loading="loading"
					placeholder="请输入查询"
					@remote-mothed = 'remoteMethod'
					v-model="select2Val"
					:options="optionsList" 
					:filterable="true"
					listenScroll
					@scrollBottom = "scrollBottom"
					scrollBottomTxt="数据已加载全部！"
				></Select2>
			</section>
			<section>
				<pre>单选/远程搜索</pre>
				<pre>select3Val值：{{select3Val}}</pre>
				<Select2 
					className="select2-1"	
					zIndex = '221'	
					clearable
					placeholder="请输入查询"
					remote
					:loading="loading"
					@remote-mothed = 'remoteMethod'
					v-model="select3Val"
					:options="optionsList" 
					:filterable="true"
				></Select2>
			</section>
			</section>
			<section>
				<pre>单选/ajax静态数据/搜索</pre>
				<pre>select4Val值：{{select4Val}}</pre>
				<Select2 
					v-model="select4Val"
					zIndex="23"
					clearable
					placeholder="请选择"
					:options="staticOptionsList" 
					:filterable="true"
				></Select2>
			</section>
			<section>
				<pre>单选/ajax静态数据</pre>
				<pre>select5Val值：{{select5Val}}</pre>
				<Select2 
					zIndex="22"
					clearable
					v-model="select5Val"
					placeholder="请选择"
					:options="staticOptionsList" 
				></Select2>
			</section>
			<section>
				<pre>单选/ajax静态数据/赋值</pre>
				<pre>select6Val值：{{select6Val}}</pre>
				<Select2 
					zIndex="22"
					v-model="select6Val"
					placeholder="请选择"
					:options="staticOptionsList" 
				></Select2>
			</section>
		</div>
	</div>
</template>
<style scoped>
	.select2-row.code{
		height: auto;
	}
	.code pre{
		background: #000;
		color:#fff;
	}
	pre{
		/*text-overflow: ellipsis;*/
		/*overflow: hidden;*/
	}
	.select-wrapper{
		display: flex;
		flex-direction: column;
	}
	.select2-row{
		display: flex;
		height: 300px;
		width: 100%;
	}
	.select2-row section{
		width:300px;
		margin-right: 10px;
	}
</style>
<script>
	import Select2 from '../../components/select2/index.vue'
	export default{
		components:{
			Select2
		},
		created(){
			this.init();
			this.initLabelValue0 = [{value:0,label:'自定义显示值0'}];
			setTimeout(()=>{
				this.initLabelValue1 = [{value:1,label:'自定义显示值1'}];
				this.initLabelValue2 = [{value:2,label:'自定义显示值2'}];
				// this.select11Val = [1013];
				this.select4Val = 1013;
			},1000)
		},
		data(){
			return{
				initLabelValue0:[],
				initLabelValue1:[],
				initLabelValue2:[],
				loading:false,
				optionsList:[],
				staticOptionsList:[],
				select1Val:'',
				params:{
					size:10,
					page:1,
					type:1,
					s_in:1,
					search:''
				},
				select2Val:'',
				select3Val:'',
				select4Val:'',
				select5Val:'',
				select6Val:1211,
				select10Val:[],
				select11Val:[1013,1064],
				select12Val:[],
				select13Val:[1013],
				select14Val:[],
				select15Val:[],
				select16Val:[],
				select17Val:[],
			}
		},
		methods:{
			change(item,backParamsData){
				console.log('item',item)
			},
			getListData(cb){
				this.loading = true;
				axios.get('http://172.16.52.75:8000/ats/api/v1/manage/user',{params:this.params}).then((res)=>{
					let _temp = [];
			       	res.data.forEach((item,index)=>{
			       		_temp.push({
			       			value:item.id,
			       			label:item.name
			       		})
			        })
			        if(cb){
			        	cb(_temp);
			        }
			        this.loading = false;
			    })
			},
			scrollBottom(filterOptions,query,dataOverCb,backParamsData){
				// console.log(this)
				this.params.page++;
				this.params.search=query;
				this.getListData((res)=>{
					if(res.length==0){
						// 没有数据时，调用 结束方法
						dataOverCb();
					}else{
						this.optionsList = filterOptions.concat(res)
					}
				});
				// this.createData((res)=>{
				// 	this.optionsList =  filterList.concat(res);
				// 	console.log(this.optionsList)
				// })
			},
			init(){
				this.getListData((res)=>{
					this.staticOptionsList = res;
					this.optionsList = res;
				})
			},
			remoteMethod(query,backParamsData){
				this.loading = true;
				this.params.page = 1;
				this.params.search = query;
				console.log('query',query)
				this.getListData((res)=>{
					this.optionsList = res;
				});
			}
		}
	}
</script>