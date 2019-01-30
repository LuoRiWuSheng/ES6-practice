let a = new Set();

a.add(1);
a.add("1");
a.add("hello");
a.add(NaN);
a.add(NaN);
/*
	说明 Set数据结构，不会讲 数字1和字符串1认为是相同的，所以，没有去重
	
	这里的Set数据结构个 === 全等的比较是差不多的，唯一的区别是  NaN在Set数据结构中被认为是相同的，而 NaN在全等运算符中被认定为时不等的 NaN !== NaN的
*/

console.log(a) //  Set { 1, '1', 'hello', NaN }}
console.log("a.size", a.size) // 4