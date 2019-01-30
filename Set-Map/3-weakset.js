/**
	WeakSet与Set一样，不重复的集合，但是参数只能是对象
	WeakSet不可遍历，没有Size的概念，因为随时有可能被垃圾回收机制回收
*/
let w = new WeakSet();
var obj = {a: 1};
w.add(obj);

console.log(w.has(obj)) // true
