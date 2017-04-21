<template>
  <div class="datetimeshow">
	  	<div class="zf-header">
	  		<i class="iconfont iconfont-fanhui arrows" @click="prevMonth"></i>
	  		<div class="zf-years">
	  			<div @click="showChooseYears" class="select-wrap">
	  				{{datetime.getFullYear()}}&nbsp;年
	  				<i class="iconfont iconfont-xiajiantou arrows-bottom"></i>
	  				&nbsp;&nbsp;&nbsp;
	  			</div>
	  			<div class="years-wrap choose-wrap" v-show="isShowChooseYears">
	  				<ul>
	  					<li v-for="year in years" :data-year="year" @click="setChooseYear(year)">{{year}}</li>
	  				</ul>
	  			</div>
			</div>
	  		<div class="zf-months">
	  			<div @click="showChooseMonths" class="select-wrap">
	  				{{datetime.getMonth()+1}}&nbsp;月
	  				<i class="iconfont iconfont-xiajiantou arrows-bottom"></i>
	  			</div>
	  			<div class="months-wrap choose-wrap" v-show="isShowChooseMonths">
	  				<ul>
	  					<li v-for="month in 12" :data-month="month" @click="setChooseMonth(month)">{{month}}&nbsp;月</li>
	  				</ul>
	  			</div>
			</div>
			<i class="iconfont iconfont-jintian-zititubiao-01 toToday" @click="toToday"></i>
			<i class="iconfont iconfont-gengduo arrows arrows-right" @click="nextMonth"></i>
	  	</div>
	  	<div class="zf-body">
	  		<!-- 表格 -->
	  		<div class="zf-type-grid" v-if="!type||type=='grid'">
		  		<table>
		  			<thead>
		  				<!-- 周 -->
			  			<tr>
			  				<th v-for="item in weeks">
			  					<span class="zf-week">{{item}}</span>
			  				</th>
			  			</tr>
		  			</thead>
		  			<tbody>
		  				<tr v-for="row in tableRows">
		  					<td v-for="day in 7">
		  						<!-- 上个月 -->
		  						<div v-if="(row-1)*7+day-dayOfWeek<=0" class="zf-prev-month zf-date"
		  							:dateTime="(datetime.getMonth()==0?(datetime.getFullYear()-1):datetime.getFullYear())+'-'+(datetime.getMonth()==0?12:datetime.getMonth())+'-'+(prevDaysOfMonth-dayOfWeek+day)"
		  							@click="dateChoose(datetime.getFullYear(),datetime.getMonth(),prevDaysOfMonth-dayOfWeek+day)">
		  							{{prevDaysOfMonth-dayOfWeek+day}}
		  						</div>
		  						<!-- 当月 -->
		  						<div v-else-if="(row-1)*7+day-dayOfWeek<=daysOfMonth" class="zf-curr-month zf-date" 
		  							:dateTime="datetime.getFullYear()+'-'+(datetime.getMonth()+1)+'-'+((row-1)*7+day-dayOfWeek)"
		  							@click="dateChoose(datetime.getFullYear(),datetime.getMonth()+1,(row-1)*7+day-dayOfWeek)">
		  							{{(row-1)*7+day-dayOfWeek}}
		  						</div>
		  						<!-- 下个月 -->
		  						<div v-else class="zf-next-month zf-date"
		  							:dateTime="(datetime.getMonth()+2==13?(datetime.getFullYear()+1):datetime.getFullYear())+'-'+(datetime.getMonth()+2==13?1:datetime.getMonth()+2)+'-'+((row-1)*7+day-dayOfWeek-daysOfMonth)"
		  							@click="dateChoose(datetime.getFullYear(),datetime.getMonth()+2,(row-1)*7+day-dayOfWeek-daysOfMonth)">
		  							{{(row-1)*7+day-dayOfWeek-daysOfMonth}}
		  						</div>
		  					</td>
		  				</tr>
		  			</tbody>
		  		</table>
  			</div>
  			<!-- 列表类型 -->
  			<div class="zf-type-list" v-if="type=='list'">
				<ul class="zf-list-days">
					<li v-for="day in daysOfMonth"
						:datetime="datetime.getFullYear()+'-'+(datetime.getMonth()+1)+'-'+day" 
						@click="dateChoose(datetime.getFullYear(),datetime.getMonth()+1,day)"
					>
						<div class="list-date-wrap">
							<span class="list-day zf-date">{{day}}</span>
							<span class="list-week">{{weeks[(day+dayOfWeek-1)%7]}}</span>
						</div>
					</li>
				</ul>
  			</div>
	  	</div>
  
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	$c-f:#fff;
	$c-d:#ddd;
	$c-a:#aaa;
	$c-theme:#fb0;
	$c-curr:#333;//当月日期颜色
	$c-next-prev:#bbb; //其它月份颜色
	$header-height:40px;
	$line-height: 40px;
	$body-height:300px;
	.datetimeshow{
		font-size: 16px;
	}
	.zf-header{
		height: $header-height;
		.arrows{
			width:40px;
			padding:10px;
			float: left;
			transition:color .2s;
			&.arrows-right{
				float: right;
			}
			&:hover{
				cursor: pointer;
				color:$c-theme;
				transition:color .2s;
			}
		}
		.toToday{
			cursor: pointer;
			margin-left: 10px;
			transition:color .2s;
			&:hover{
				color: $c-theme;
				transition:color .2s;
			}
		}
		.arrows-bottom{
			font-size: 12px;
			color:$c-a;
		}
		.zf-months,
		.zf-years{
			display: inline-block;
			position: relative;
			height: $header-height;
			line-height: $header-height;
			&:hover{
				.select-wrap{
					cursor: pointer;
					color:$c-theme;
					transition:color .2s;
				}
			}
			.choose-wrap{
				height: 200px;
				overflow: auto;
				width:100px;
				position: absolute;
				left: 50%;
				top:$header-height;
				transform: translateX(-50%);
				background: $c-f;
				z-index: 99;
				border:solid 1px $c-d;
				ul{
					position: relative;
					li{
						height: 25px;
						line-height: 25px;
						font-size: 14px;
						&:hover{
							background: $c-d;
							cursor: default;
						}
						&.active{
							background: $c-theme;
							color:$c-f;
						}
					}
				}
			}
			&.zf-months{
				.choose-wrap{
					width:80px;
				}
			}
		}
	}
  	.zf-body{
  		.zf-type-grid{
  			th,td{
	  			width:50px;
	  			height: 50px;
			    vertical-align: middle;
	  		}
		  	.zf-date{
		  		position: relative;
		  		white-space: nowrap;
		  		display: inline-block;
		  		width:30px;
		  		height: 30px;
		  		line-height: 30px;
		  		border-radius: 30px;
		  		border:solid 1px transparent;
		  		transition:border-color .2s;
				&:hover{
					border-color:$c-theme;
					cursor: pointer;
					transition:border-color .2s;
				}
				&.choosedTime{
					background: $c-theme;
					color:$c-f;
				}
		  	}
		  	.zf-curr-month{
		  		color:$c-curr;
		  	}
		  	.zf-prev-month,
		  	.zf-next-month{
		  		color:$c-next-prev;
		  	}
  		}
  		.zf-type-list{
	  		height: $body-height;
	  		overflow: auto;
	  		.zf-list-days{
	  			li{
	  				transition:background .2s;
	  				text-align: left;
	  				&.choosedTime{
						background: $c-theme;
						color:$c-f;
	  				}
	  				&:hover:not(.choosedTime){
	  					background: $c-d;
	  					transition:background .2s;
	  				}
	  				.list-date-wrap{
		  				width:100px;
		  				display: inline-block;
		  				.list-day{
		  					position: relative;
		  					width:30px;
		  					display: inline-block;
		  					height:$line-height; 
		  					text-align: center;
		  					line-height: $line-height;
		  					&:after{
		  						bottom: 0;
		  					}
		  				}
		  				.list-week{
		  					@extend .list-day;
		  					width: 50px;
		  				}
		  			}
	  			}
	  			
	  		}
	  	}
	  	.curr-date:after{
			content: '';
			width:4px;
			height: 4px;
			border-radius: 50%;
			background: $c-theme;
			position: absolute;
			bottom: -6px;
			left: 50%;
			transform: translateX(-50%);
	  	}
  	}
</style>
<script>
export default {
	props:['type'],
  	data () {
	    return {
	    	datetime:null,
	    	// 每周
	    	weeks:['周日','周一','周二','周三','周四','周五','周六'],
	    	years:[],
	    	minYear:1990,
	    	maxYear:2050,
	    	// 当天天数
	    	daysOfMonth:0,
	    	// 上个月天数
	    	prevDaysOfMonth:0,
	    	// 表格需要行数
	    	tableRows:0,
	    	// 每月第一天星期几
	    	dayOfWeek:0,
	    	isShowChooseYears:false,
	    	isShowChooseMonths:false,
	    	choosedDateTime:''
	    }
  	},
  	created(){
  		this.datetime = new Date();
  		// this.setDate(2017,1,31)
  		//年份 下拉
	  	this.initYears();
  	},
  	mounted(){
	  	this.initDate();
	},
	methods:{
    	initDate(){
    		// 上月与本月天数
    		this.getDaysOfMonth();
    		// 本月第一天为星期几
    		this.getDayOfWeek();
			// grid本月日历有多少行
			this.type==='list'||this.getTableRows();
    		this.$nextTick(()=>{
    			// 设置今天
    			this.setCurrDate();
    			// 设置日期
    			this.setChoosedStyle();
    		})
    	},
    	// 设置日期
    	// month 传入参数0～13  0：上年最后一个月 13：下年第一个月
    	setDate(year,month,day){
    		// 设置顺序必须为： 日->月 不然设置29-30日的时候，会出现日期不正常的现象，很难发现，这个坑 搞了找了好长时间
    		this.datetime.setDate(day);
    		this.datetime.setMonth(month-1);
    		// 不设置年份 会自动切换  如果设置的话  跨年有问题
    		// this.datetime.setFullYear(year);
			this.initDate();
			
			// console.log('this.datetime',this.datetime,day,month,year);
    	},
    	// 日历点击事件
    	// month 传入参数0～13  0：上年最后一个月 13：下年第一个月
    	// _virtual_year _virtual_month 为转化后的直观变量
    	dateChoose(year,month,day){
    		this.choosedDateTime = `${year}-${month}-${day}`;
    		this.setDate(year,month,day);
    		// console.log('dateChoose',year,month,day);
    		let _exchangeYM = this.exchangeYearMonth(year,month,day);
    		// console.log(_exchangeYM.year,_exchangeYM.month,_exchangeYM.day)
    		this.$emit('choosed',_exchangeYM);
    	},
    	//年月转化 0~上一年的12 13～下一年的1月份
    	exchangeYearMonth(year,month,day){
    		let _virtual_year ,
    			_virtual_month,
    			_virtual_day = day;
    			switch(month){
    				case 13:
    					_virtual_year = year+1;
    					_virtual_month = 1;
    				break;
    				case 0:
    					_virtual_year = year-1;
    					_virtual_month = 12;
    				break;
    				default:
    					_virtual_year = year;
    					_virtual_month = month;
    				break;
    			}
    		return {
    			year:_virtual_year,
    			month:_virtual_month,
    			day:_virtual_day
    		}
    	},
    	// 设置当前日期
    	setCurrDate(){
    		let _date = new Date(),
    			_year = _date.getFullYear(),
    			_month = _date.getMonth(),
    			_day = _date.getDate(),
    			// _timeStr = _year + '-' _month + '-' + _day;
    			_timeStr = `${_year}-${_month+1}-${_day}`,
    			_todayEle = this.type!=='list'?$('[datetime='+_timeStr+']','.zf-body'):
    						$('[datetime='+_timeStr+'] .list-day','.zf-body'),
    			_curr_dateEle = $('.curr-date','.zf-body');
    			if(_curr_dateEle.length>=1) _curr_dateEle.removeClass('curr-date');
    			if(_todayEle.length>=1) _todayEle.addClass('curr-date');
    	},
    	//设置选中日期
    	setChoosedStyle(){
    		if(!this.choosedDateTime) return;
    		let _choosedEle = $('[datetime='+this.choosedDateTime+']','.zf-body'),
    			_oldChoosedEle = $('.choosedTime','.zf-body');
				if(_oldChoosedEle.length>0) _oldChoosedEle.removeClass('choosedTime');
				if(_choosedEle.length>0) _choosedEle.addClass('choosedTime');
    	},
    	// 月天数
    	getDaysOfMonth(){
    		let _year = this.datetime.getFullYear(),
    			_month = this.datetime.getMonth(),
    			_day = this.datetime.getDate(),
    			_date = new Date(_year,_month,_day),
    			_date2 = new Date(_year,_month,_day);
    			// console.log('_month',_year,_month,_day);
			// 上个月天数
    		_date.setDate(0);
    		this.prevDaysOfMonth = _date.getDate();
    		// 当月天数
    		_date2.setMonth(_month+1);
    		_date2.setDate(0);
    		this.daysOfMonth = _date2.getDate();
    		// console.log('_date',_date.getDate());
    		// console.log('_date2',_date2.getDate());
    	},
    	// 每月第一天星期几
    	getDayOfWeek(){
    		let _date = new Date(this.datetime.getFullYear(),this.datetime.getMonth(),1);
    		this.dayOfWeek = _date.getDay();
    	},
    	// 表格需要行数
    	getTableRows(){
    		this.tableRows = Math.ceil((this.daysOfMonth+this.dayOfWeek)/7);
    	},
    	// 上个月
    	prevMonth(){
    		let _year = this.datetime.getFullYear(),
    			_month = this.datetime.getMonth(),
    			_day = 1;
    		this.setDate(_year,_month,_day);
    		let _exchangeYM = this.exchangeYearMonth(_year,_month,_day);
    		// console.log('prevMonth',_year,_month,_day);
    		this.$emit('prev',_exchangeYM)
    	},
    	// 下个月
    	nextMonth(){
    		let _year = this.datetime.getFullYear(),
    			_month = this.datetime.getMonth(),
    			_day = 1;
    		this.setDate(_year,_month+2,_day);
    		let _exchangeYM = this.exchangeYearMonth(_year,_month+2,_day);
    		this.$emit('next',_exchangeYM);
    	},
    	// 今天
    	toToday(){
    		this.datetime = new Date();
    		this.initDate();
    	},
    	// 初始化年份
    	initYears(){
    		for(let year = this.minYear;year<=this.maxYear;year++){
    			this.years.push(year);
    		}
    	},
    	// 显示 年份选项
    	showChooseYears(){
    		this.isShowChooseMonths = false;
    		this.isShowChooseYears = !this.isShowChooseYears;
    		// 定位当前年份与加样式
    		let	_old_year = this.datetime.getFullYear(),
    			_yearEle = $('[data-year='+_old_year+']','.years-wrap'),
    			_yearWrapEle = $('.years-wrap','.zf-years'),
    			_ulEle = $('ul','.years-wrap');
    		this.$nextTick(()=>{
    			_yearEle.addClass('active').siblings().removeClass('active');
    			// 滚动到当前年份
    			_yearWrapEle.scrollTop(_yearEle.position().top);
    		})
    	},
    	// 设置年份
    	setChooseYear(year){
    		this.isShowChooseYears = false;
    		this.datetime.setFullYear(year);
    		this.initDate();
    		this.$emit('yearchange',year);
    	},
    	// 显示 月份
    	showChooseMonths(){
    		this.isShowChooseYears = false;
    		this.isShowChooseMonths = !this.isShowChooseMonths;
    		// 加样式
    		let	_old_month = this.datetime.getMonth(),
    			_monthEle = $('[data-month='+(_old_month+1)+']','.months-wrap'),
    			_monthWrapEle = $('.months-wrap','.zf-months'),
    			_ulEle = $('ul','.months-wrap');
    		this.$nextTick(()=>{
    			_monthEle.addClass('active').siblings().removeClass('active');
    			// 滚动到当前年份
    			_monthWrapEle.scrollTop(_monthEle.position().top);
    		})
    	},
    	// 设置月份
    	setChooseMonth(month){
    		this.isShowChooseMonths = false;
    		this.datetime.setMonth(month-1);
    		this.initDate();
    		this.$emit('monthchange',month);
    	}
  	},
  	watch:{
  		// 改变类型时，初始化
  		type:function(val){
  			this.initDate();
  		}
  	}
}
</script>
