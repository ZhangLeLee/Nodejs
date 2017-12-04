module.exports = function(grunt){
	// 配置grunt方法
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),
		cssmin:{
			combine:{
				files:{
					"app/css/style.css":["app/css/background.css","app/css/fontsize.css"]
				}
			}			
		},
		uglify:{
			dist:{
				files:{
					"app/js/main.min.js":["app/js/min.js"]
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default",["cssmin","uglify"]);

	// grunt.registerTask("default",'',function(){
	// 	grunt.log.write("在终端运行grunt命令,就会执行这段话!");
	// });
}


// gruntjs使用
// sudo npm install -g grunt-cli  安装gruntjs
// grunt -v  检测是否安装成功
// npm init --yes
// cnpm install grunt --save
// cnpm install grunt-contrib-cssmin --save
// cnpm install grunt-contrib-uglify --save



