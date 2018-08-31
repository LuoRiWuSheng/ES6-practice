var x = 2;
function foo(x,y = function() {x = 20;}) { // 这里的X作用域和y是一体的，而且这个y的匿名函数中的x和参数1 x的作用域一样
	// 01 这里的作用域和console的是一体的  所以，console打印的是33
	var x = 33;
	y();
	console.log(x); //33
    
}
foo();
console.log(x); // 2 外层的作用域是没有受影响的

// 同样的代码，如果不在foo中声明x的效果如下

function baz(x,y = function() {x = 20;}) {
	y();
	// 将上面的在foo中声明的x去掉，那么这里打印的作用域x就是参数的个作用域一致，就是20
	console.log(x);  // 20
}
baz();



