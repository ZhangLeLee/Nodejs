var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
	if(req.url !== "/favicon.ico"){
		// console.log(req.url);
		if(req.url == "/" || req.url == "/home"){
			res.writeHead(200,{"Content-type":"text/html"}); 
			var myReadStream = fs.createReadStream(__dirname+"/home.html","utf8");
			myReadStream.pipe(res);	
		} else if (req.url == "/about"){
			res.writeHead(200,{"Content-type":"text/html"}); 
			var myReadStream = fs.createReadStream(__dirname+"/about.html","utf8");
			myReadStream.pipe(res);	
		} else if (req.url == "/contact"){
			res.writeHead(200,{"Content-type":"text/html"}); 
			var myReadStream = fs.createReadStream(__dirname+"/contact.html","utf8");
			myReadStream.pipe(res);	
		} else {
			res.writeHead(200,{"Content-type":"text/html"}); 
			var myReadStream = fs.createReadStream(__dirname+"/error.html","utf8");
			myReadStream.pipe(res);	
		}
	}
});
server.listen(3000,"127.0.0.1");
console.log("Server is running...");


