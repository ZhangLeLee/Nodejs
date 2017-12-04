var express = require("express");
var app = express();

app.set("view engine","ejs");
app.use("/assets",express.static('assets'));

app.get("/",(req,res) => {
	res.render("index");
});
app.get("/contact",(req,res) => {
	res.render("contact");
});
app.get("/blog/:sbqid",(req,res) => {
	var sbqdata = [
		{title:"博客1",author:"Henry",body:"this is first blog!"},
		{title:"博客2",author:"Bucky",body:"this is second blog!"},
		{title:"博客3",author:"Emily",body:"this is third blog!"}
	];
	res.render("blog",{id:req.params.sbqid,data:sbqdata});
});
app.listen(3000);

