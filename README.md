# vueFrame
> vue2+vuex+vue-router+axios+ElementUI+webpack+scss+es6+简单日历显示

# 问题讨论请联系本人
>Email:1184554547@qq.com
---
# 外部链接
<ul>
	<li><a href="https://cn.vuejs.org/">vue2</a></li>
	<li><a href="http://vuex.vuejs.org/">vuex</a></li>
	<li><a href="https://github.com/mzabriskie/axios">axios</a></li>
	<li><a href="http://element.eleme.io/#/zh-CN">ElementUI</a></li>
</ul>


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
# 测试环境打包 配置文件/src/config/global_test.js
npm run test

# build for production with minification
# 生产环境打包 配置文件/src/config/global_prod.js
npm run build
```
---
## 图例
	#demo-0
![image](https://github.com/zfdai/vueFrame-datetimeshow/raw/master/screenshots/demo-0.png)
---
	#demo-1
![image](https://github.com/zfdai/vueFrame-datetimeshow/raw/master/screenshots/demo-1.png)
---
	#demo-2
![image](https://github.com/zfdai/vueFrame-datetimeshow/raw/master/screenshots/demo-2.png)
---
	#others
![image](https://github.com/zfdai/vueFrame-datetimeshow/raw/master/screenshots/demo-3.png)
---
![image](https://github.com/zfdai/vueFrame-datetimeshow/raw/master/screenshots/demo-4.png)
---
![image](https://github.com/zfdai/vueFrame-datetimeshow/raw/master/screenshots/demo-5.png)
---
![image](https://github.com/zfdai/vueFrame-datetimeshow/raw/master/screenshots/demo-6.png)
---
![image](https://github.com/zfdai/vueFrame-datetimeshow/raw/master/screenshots/demo-7.png)
---
## props
```
---
type:'grid'(默认)|'list' 
grid 为图表类型 	eg:demo-1
list 为列表类型	eg:demo-2
```
## event
---
```
today		点击今天回调   		(data:Object 今天日期)    
next:		点击下个月回调	      (data:Object 返回下月1号)    
prev:		点击上个月回调	      (data:Object 返回上月1号)	 
choosed:	选中日期时回调     (data:Object 返回当前日期)	
yearchange:	年份下拉回调		 (data:Number 返回年份)		
monthchange:月份下拉选中回调	(data:Number 返回月份)
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
