// 参数作用域
let x = 1;
function foo(x, y = x) {
	console.log(x); // 20
}

foo(20);

// 下面的y = x 这里形成一个单独的作用域，x在这里面没有定义，所以直接执行全局的x 所以这里y = 1 下面的重新给x赋值，是不会影响y的值
// 但是，函数体内{} 是不能在声明y的，会报错， y has already been ndeclared
function foo2(y = x) {
	let x = 21;
	console.log(y); // 1
} 
foo2();
