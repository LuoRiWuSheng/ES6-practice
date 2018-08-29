// 对象的解构赋值

let obj = {
	p: ["hello", {
		y: "world"
	}]
};

// p是模式，x,y才是变量，所以这个嵌套解构赋值是这样，又因为 y这个对象的属性名和值一样，所以简写成一个 这里的y既是匹配模式，又是变量 {y: y}
/* let {p: [x, {y}]} = obj;

console.log(x,y); */

// 这里的p是模式 p1是变量，然后后面的是一个数组，所以，也需要一个模式p，里面再进行解构，变量就是x,y
let { p: p1, p: [x, { y }] } = obj;

console.log(p1); //[ 'hello', { y: 'world' } ]  这里不能去打印p  因为P是模式，不是变量


const word = {
	loc: {
		start: {
			line: 1,
			colum: 5
		}
	}
};

let {loc, loc: { start },loc: { start : {line,colum}}} = word;
console.log("-------------------");

console.log(loc);
console.log(start);
console.log(line);
console.log(colum);






