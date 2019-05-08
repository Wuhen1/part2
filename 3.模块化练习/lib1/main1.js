require.config({
    baseUrl:"./lib1",
    paths:{
        moduleA:"../js/a",
        moduleB:"../js/b",
    }
})

require(["moduleA","moduleB"],function(a,b){
    console.log(a);
    console.log(b);
})


// require.config({
// 	baseUrl: "./js",	//配置基础路径(默认路径是基于当前文件夹)
// 	paths: {	//配置依赖模块的路径
// 		moduleA: "a",
// 		moduleB: "b",
// 	}
// })

// // 引用模块
// require(["moduleA","moduleB"],function(a,b){
// 	console.log(a);
// 	console.log(b);
// })