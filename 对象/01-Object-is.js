// 检测2个值是不是相等

console.log(Object.is(NaN,NaN));  // true

console.log(Object.is(+0,-0));  // false

console.log(Object.is("1",1)); // false

/**
 * Object.is 判断2个值是不是相等
 * 1、 不会做类型转换， "1"和1 是不等的
 * 2、 NaN是和NaN相等
 * 3、 +0和 -0 是不等的
 * 原则是： 值相等，就等
 */


//es5通过下面的方式部署

Object.defineProperty(Object,"newIs",{
	value: function(x,y) {
		if(x === y) {
			// 针对 +0和-0的情况
			return x !== 0 || 1 / x === 1 / y;
		}

		// 针对NaN的情况
		return x !==  x && y !== y; 
	},
	configurable: true,
	enumerable: false,
	writable: true
});

console.log(Object.newIs(NaN,NaN)); // true

