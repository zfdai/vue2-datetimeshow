
let domTool = {
	hasClass(elements,cName){
		// ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断 
		return elements&&!!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
	},
	addClass(elements,cName){
		if( elements&&!this.hasClass( elements,cName ) ){ 
			elements.className += " " + cName; 
		}; 
	},
	removeClass(elements,cName){
		if( elements&&this.hasClass( elements,cName ) ){ 
			// replace方法是替换 
			elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " ); 
		}; 
	}
}
export default domTool