define(["jquery"],function(jq){
	var myName = "   小蓝   ";
	var newName = jq.trim(myName);	//jquery的.trim()去掉前后空格
	return newName;
})