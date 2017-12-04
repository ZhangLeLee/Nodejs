var express = require("express");
var app = express();

// app.get('/',function(req,res){});  写法如下
app.get('/',(req,res) => {
	// console.log(req);
	res.send("This is Home Page!");
});

app.get('/contact',(req,res) => {
	res.send("This is Contact Page!");
})

app.get('/blogs/:sbqid',(req,res) => {
	// console.log(req);
	res.send("具体的路由参数为: "+req.params.sbqid);
})

app.listen(3000);   // 第二个参数默认为当前主机的IP地址








