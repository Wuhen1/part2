// 配置require
require.config({
	baseUrl: "./js",	//配置基础路径(默认路径是基于当前文件夹)
	paths: {	//配置依赖模块的路径
		moduleA: "a",
		moduleB: "b",
		jquery: "jquery"	//jquery的模块名称使用jquery
	}
})

// 引用模块
require(["moduleA","moduleB","jquery"],function(a,b,c){
	console.log(a);
	console.log(b);
	console.log(c);
})