// 所有请求接口

import fetchData from './fetchData.js'
import api_url from './url.js'
// 获取新闻
let getNews = (params)=>fetchData('get',api_url.infoNews,params)


export{
	getNews
}