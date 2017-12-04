const gulp = require("gulp");    //const 常量, 不改变的东西使用const
const gulpCopy = require("gulp-copy");
const minImage = require("gulp-imagemin");
const gulpUglify = require("gulp-uglify");
const sass = require("gulp-sass");
const webserver = require("gulp-webserver");

/*
	=================常用方法================
	gulp.task  --定义任务
	gulp.src   --输入文件路径
	gulp.dest  --输出文件路径
	gulp.watch --监听文件变化

	=================node方法================
	pipe       --管道
*/


// 定义具体任务
gulp.task('message',() => {
	console.log("执行具体任务,需要在终端运行 gulp message(任务名)");
});


// 定义拷贝任务
gulp.task("copyHtml",() => {   //任务名随便起
	// 找到需要拷贝的文件路径
	gulp.src('src/*.html')  //拷贝所有html文件 *.html
		.pipe(gulp.dest('dist'));
});


// 定义压缩图片任务
gulp.task("imageMin",() => {
	gulp.src('src/images/*')
		.pipe(minImage())
		.pipe(gulp.dest("dist/images"));
});


// 定义压缩js代码任务
/*
	1.下载模块 -- gulp-uglify  
	2.引入模块 -- require
	3.定义任务 -- task
	4.在src文件夹下创建js文件夹,在js文件夹下创建一个文件,随便写一个函数
	5.实现任务
*/
gulp.task("uglify",() => {
	gulp.src('src/js/*.js')
		.pipe(gulpUglify())
		.pipe(gulp.dest("dist/js"));
});


// 定义sass转任务
gulp.task("sass",() => {
	gulp.src('src/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest("dist/css"));
})


// 定义默认任务
gulp.task('default',["message","copyHtml","imageMin","uglify","sass"]);


// 监听任务
gulp.task("watch1",function(){
	gulp.watch("src/js/*.js",["uglify"]);
	gulp.watch("src/images/*",["imageMin"]);
	gulp.watch("src/sass/*.scss",["sass"]);
	gulp.watch("src/*.html",["copyHtml"]);
});


// webserver
gulp.task("webserver",() => {
	return gulp.src("app")
			   .pipe(webserver({
			   		port:4000,
			   		livereload:true,
			   		open:true
			   }));
});
// 使用wecserver时, 不需要监听 watch
// gulp.task("watch",function(){
// 	gulp.watch("app",["webserver"]);
// });



