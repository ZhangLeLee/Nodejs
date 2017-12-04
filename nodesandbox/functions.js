// 在nodejs中经常使用函数表达式

//  正常
function sayHi1(){
	console.log("Hello 蹄蹄!");
}
// 函数表达式
var sayHi2 = function(){
	console.log("Hello Graceful蹄!");
}
// sayHi();
// 注意: 函数表达式 右左法则(函数表达式比正常函数执行快)

function callFunction(foo){
	foo();
}
// callFunction(sayHi2);










