var fs = require("fs");

// 同步 读取 & 写入
// var readMe = fs.readFileSync('readMe.txt',"utf8");
// console.log(readMe);

// fs.writeFileSync("writeMe.txt",readMe);
// fs.writeFileSync("writeMe.txt","Hello World!");
// var read = readMe + "hello world!";
// fs.writeFileSync("writeMe.txt","Hello World!");


// 异步 读取 & 写入
// fs.readFile("readMe.txt","utf8",function(err,data){
// 	if(err) throw err;
// 	console.log(data);
// });

// console.log(123);

// fs.writeFile("whiteMe.txt","Everyone!",function(err,data){
// 	if(err) throw err;
// 	console.log(data);
// })


// 练习
// 异步读取文件
// 并将读取的文件内容写到writeMe.txt中
// fs.readFile("readMe.txt","utf8",function(err,data){
// 	if(err) throw err;
// 	fs.writeFile("writeMe.txt",data);
// });


// 删除文件
// fs.unlink("writeMe.txt",function(err,result){
// 	if(err) throw err;
// 	console.log(result);  //underfined
// });

// 在当前文件夹中创建文件夹
fs.mkdir("stuff",function(){
});

// 删除文件夹
fs.rmdir("stuff");