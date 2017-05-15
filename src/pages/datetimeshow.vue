<template>
  <div class="relative">
    <div class="demo-container">
      类型：
      <select v-model="selectType">
        <option value="grid">表格</option>
        <option value="list">列表</option>
      </select>
      <br/>
      <br/>
      <date-time-show 
        :type = "selectType"
       @today="today"
       @next="next"
       @prev="prev"
       @choosed="choosed"
       @yearchange="yearchange"
       @monthchange="monthchange"
      ></date-time-show>
    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .demo-container{
  	// position: absolute;
  	// top:50%;
  	// left: 50%;
  	// transform:translateX(-50%) translateY(-50%);
    width: 350px; 
  }
</style>
<script>
import dateTimeShow from '../components/datetimeshow/index'
export default {
	components:{
		dateTimeShow
	},
  data () {
    return {
    	selectType:'grid',
    }
  },
  methods:{
    today(data){
      console.log('我点击今天～',data)
    },
  	next(data){
  		console.log('我点击了下一个月按钮～',data)
  	},
  	prev(data){
  		console.log('我点击了上一个月按钮～',data)
  	},
  	choosed(data){
  		console.log('我选中了日期～',data)
  	},
  	yearchange(data){
  		console.log('年份改变～',data)
  	},
  	monthchange(data){
  		console.log('月份改变～',data)
  	}
  }
}
</script>
