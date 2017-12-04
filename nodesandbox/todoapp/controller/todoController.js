var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var data = [{item:"Dog"},{item:"East"},{item:"West"}];

module.exports = function(app){
	// console.log(app);
	app.get('/todo',(req,res) => {
		res.render("todos",{todos:data});
	});
	app.post('/todo',urlencodedParser,(req,res) => {
		// console.log(req.body);  // 打印出todes.ejs传输的内容 如:{item:'aaa'}
		data.push(req.body);   // 将传输来的内容传到数组
		res.json(data);		// 将数据以json形式返回前台
	});
	app.delete('/todo/:name',(req,res) => {
		// console.log(req.params.name);
		// ES6 == es2015 array method(for..of filter map)
		// filter: 过滤(将条件不满足的干掉, 满足的留下)
		data = data.filter(function(todo){
	 	// 若传的数据和数组中的数据不相等, 满足条件, 留到数组中
			var value = todo.item !== req.params.name;
			console.log(value);
			return value; // 返回的是bool值
		});		
		res.json(data);
	});
}