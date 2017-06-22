<template>
  <div class="hello">
    <p class="test">test</p>
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
  @import 'src/assets/scss/common/variable';
  @import '../assets/scss/test';
  p{
    color:$abase;
  }
</style>
<style scoped>
  @import '../assets/scss/test.css';
</style>
<script>
import api_url from '@src/config/url'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    // 初始化数据
   // this.init();
  },
  methods:{
    init(){
      axios.get(api_url.infoNews).then((data)=>{
        console.log('data',data);
      })
    }
  }
}
</script>
