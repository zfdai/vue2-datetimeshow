<template>
  <div class="hello">
    <img src="../assets/img/logo.png">
    <!-- 日期功能页面start -->
    <p>
      <router-link class="link-to-datetimeshow" :to="{name:'datetimeshow'}">跳转到日期页面</router-link>
    </p>
     <!-- 日期功能页面end -->
    <h1>{{ msg }}</h1>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
</style>
<script>
import {getNews} from '@src/services/service.js'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    // 初始化 数据  --可用
   // this.init();
  },
  methods:{
    init(){
      getNews({page:1,page_size:10}).then((res)=>{
        console.log('res',res)
      },()=>{})
    }
  }
}
</script>
