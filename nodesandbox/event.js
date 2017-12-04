var event = require("events");

// js事件
// element.on("click",function(){
// 	// 具体执行的代码
// });


// 实例化事件对象
var myEmitter = new event.EventEmitter();

// 注册事件
myEmitter.on("sbqEvent",function(){
	console.log("sbqEvent事件被触发!");
});

// 激活事件
myEmitter.emit("sbqEvent");

