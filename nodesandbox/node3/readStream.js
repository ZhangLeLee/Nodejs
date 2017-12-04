var http = require("http");
var fs = require("fs");
// 创建 读取文件流对象
// var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");

// var myWriteStream = fs.createWriteStream(__dirname+"/writeMe.txt","utf8");
// console.log(myReadStream);
// myReadStream.on("data",function(chunk){   //data名字不可改变
	// console.log("=====================接收chunk======================");
	// console.log(chunk);
	// myWriteStream.write(chunk);
// }); 

// 管道  
// 输入/输出两个功能  pipe()方法 -- 左边拿数据, 右边是将数据放入的地方
// 不用自己创建
// myReadStream.pipe(myWriteStream);



// 创建服务器
var server = http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/plain"});
	var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");
	myReadStream.pipe(res);
});
server.listen(3000,"127.0.0.1");
console.log("Server is running...");




