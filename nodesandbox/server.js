// 只要内容改变, 需重启终端(CTRL+C)


var http = require("http");
var server = http.createServer(function(req,res){
	console.log("客户端和服务器已经建立通信"+req.url);
	// 响应头(否则只能返回字符串)
	res.writeHead(200,{"Content-type":"text/plain"});
	res.end("Hey NodeJS");
});

server.listen(3000,"127.0.0.1");  //端口号,主机地址
console.log("server is running...");

