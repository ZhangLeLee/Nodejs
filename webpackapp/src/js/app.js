// alert("hello world!");

// alert(require("./people.js"));

// require("!style-loader!css-loader!./style.css");
require("../css/style.css");


let people = require("./people.js");
// console.log(people);
// console.log(people[1].name);
let $ = require("jquery");  //必须有变量接收, 变量名可以改变


$.each(people,function(key,value){
	$("body").append(`<h1>${people[key].name}</h1>`);
})


/*
 	entry: 入口文件有且只能有一个, 其他功能文件可以通过入口文件进行引入, 一并打包到出口文件.
 	output: 出口文件有且只有一个, 通常命名为bundle.js, 会将入口文件及相关联的功能文件内容, 全部打包到出口文件.
 	webpack app.js bundle.js : 运行打包命令
 	webpack app.js bundle.js --watch : 持续监听并打包

 	style-loader: 作用是在html中添加style标签, 让html可以识别样式
 	css-loader: 作用是让打包文件可以获取到css的样式并且在入口文件中能够引入.

 	webpack-dev-server: 作用是搭建服务器, 将项目运行在服务器中

*/