// var http = require("http");
// var fs = require("fs");
// var server = http.createServer(function(req,res){
// 	res.writeHead(200,{"Content-type":"text/html"});   // text/html
// 	var myReadStream = fs.createReadStream(__dirname+"/index.html","utf8");
// 	myReadStream.pipe(res);
// });
// server.listen(3000,"127.0.0.1");
// console.log("Srerver is running...");



var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"application/json"});   
	// var myReadStream = fs.createReadStream(__dirname+"/users.json","utf8");
	// myReadStream.pipe(res);
	var users = {
		name:"Henry",
		age:30,
		gender:"male"
	};
	res.end(JSON.stringify(users));
});
server.listen(3000,"127.0.0.1");
console.log("Server is running...");


/*
	text/plain : 返回的是纯文本
	text/html : 返回的是html
	application: 返回的是json
*/