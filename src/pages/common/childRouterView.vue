<template>
	<div class="childRouterView">
		<!-- 头部路由 -->
		<router-view name="headerRouterView"></router-view> 
	  	<!-- 内部嵌套路由 -->
	  	<el-row>
			<!-- 左侧菜单 -->
			<el-col :span="4">
				<left-menu></left-menu>
			</el-col>
			<!-- 右侧内容 -->
			<el-col :span="20" class="childRouterViewWrapper">
				<router-view></router-view>
			</el-col>
		</el-row>
	  	
	  	<!-- 底部路由 -->
	  	<router-view name="footerRouterView"></router-view>
  	</div>
</template>
<style scoped lang="scss">
	.childRouterViewWrapper{
		padding-left: 20px;
	}
</style>
<script>
	import leftMenu from '@src/pages/common/routerSnippet/leftMenu'
	export default {
		components:{
			leftMenu
		}
	}
</script>