// 配置require
require.config({
	baseUrl: "./js",	//配置基础路径(默认路径是基于当前文件夹)
	paths: {	//配置依赖模块的路径
		moduleA: "a",
		moduleB: "b",
		moduleC: "c",
		jquery: "jquery"	//jquery的模块名称使用jquery
	},
	shim: {	//加载非规范模块
		"moduleC": {
			deps: ["jquery"],	//指定该模块的依赖模块
			exports: "myName"	//指定输出的变量
		}
	}
})

// 引用模块
require(["moduleA","moduleB","jquery","moduleC"],function(a,b,jq,c){
	console.log(a);
	console.log(b);
	console.log(jq);
	console.log(c);
})