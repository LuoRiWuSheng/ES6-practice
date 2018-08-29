function m1({a = 1, b = 2} = {}) {
	return console.log({a ,b});
}



function m2({a,b} = {a:1,b:2}) {
	return console.log({a,b});
}

// 函数都不传值的情况
m1(); //{ a: 1, b: 2 }
m2(); //{ a: 1, b: 2 }

console.log("*****************");

// 函数传1个参数的情况
m1({a:100});// { a: 100, b: 2 }
m2({a: 101}); // { a: 101, b: undefined }
console.log("*****************");
// 参数都有值的情况
m1({a: 22,b: 33}); //{ a: 22, b: 33 }
m2({a: 222,b:333}); //{ a: 222, b: 333 }
console.log("*****************");
// 直接都传空对象的情况
m1({});// { a: 1, b: 2 }
m2({}); //{ a: undefined, b: undefined }

/**
 * 在调用test时，如果什么都不传，就只发生对象的解构，没有函数的默认参数 与{x：y,y：y}是一样的,此时就报错，不能解构undefined或null 的属性x
 * 要想test参数启用默认参数，最起码传一个对象，即使是空对象 test({})  <==>  function test({x,y:2} = {}) 是一样的
 */
console.log((function test({x,y =2}) {
	return {x,y};
}).length);

//test();