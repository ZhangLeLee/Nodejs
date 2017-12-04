const path = require("path");

module.exports = {
	//配置入口文件 -- 入口文件: 入口文件的路径
	entry:"./src/js/app.js",
	//配置出口文件
	output:{
		// path:__dirname,                 //不引人path用这个
		path:path.resolve(__dirname + "/dist"),       //引入path用这个
		filename:"bundle.js"
	},
	//配置模块信息 (第三方库, 加载器, 静态文件)
	module:{     
		loaders:[
			{
				test:/\.css$/,   // 所有CSS文件
				loader:"style-loader!css-loader"
			},
			{   // 将自己写的es6等其他语言转换成es5(在bundle.js文件中查看效果)
				test:/\.js$/,
				loader:"babel-loader",
				exclude:/node_modules/,   // 不需要转换的js文件, 只转换自己的js文件
				query:{   // 执行语句
					presets:["es2015"]   // 将es6(es2015)语言转换为es5
				}
			}
		]
	}
}