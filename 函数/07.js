// 箭头函数与变量解构结合使用

let obj = {
	first: "夏",
	last: "XXX"
};

let fullName = ({first,last})=> first + " " + last;

/**
 * 等价于下面的
 
let fullName = function(obj) {
    return obj.first + " " + obj.last;
}
 * 
 * 
 */

console.log(fullName(obj));

// 测试箭头函数的 this

let father = () => {
	console.log("this对象",this);  // node环境返回空对象，浏览器中返回的就是window
};
father();

function CreateObje() {
	this.x = 1;
	if(this instanceof CreateObje) {
		console.log("是它的实例",this);  // node环境返回 {x:1}这样一个对象，其实就是CreateObje  在浏览器环境中，返回 CreateObje{x: 1} 
	} else {
		new CreateObje();
	}
}
CreateObje.prototype.say = ()=> {
	return this.x;
};
var ins = new CreateObje();
