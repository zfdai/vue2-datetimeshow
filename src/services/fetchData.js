let fetchData = (type,url,data,opts)=>{
	let _options = Object.assign({
		url:url,
		type:type,
		data:data
	},opts)
	return $.ajax(_options)
}
export default fetchData