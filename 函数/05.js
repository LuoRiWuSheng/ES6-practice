// rest参数 剩余参数

function add(...val) {
	let [a,b,c] = [...val];
	console.log(a,b,c);
}
add(1,2,3);

function add2() {
	// arguments不是真正的数组，是一个类数组，需要调用Array.prototype.slice.call变成真正的数组
	console.log(Array.prototype.slice.call(arguments));
	return Array.prototype.slice.call(arguments).sort();
}
console.log(add2(22,1,"FFF"));
