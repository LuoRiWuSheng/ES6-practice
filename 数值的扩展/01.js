// ES6提供了对于有限数和NaN 的一个判断

console.log(Number.isFinite(12)); // true
console.log(Number.isFinite(0.31)); // true

console.log(Number.isFinite("12")); // false

console.log(Number.isFinite(Infinity)); // false

console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(NaN)); // false

console.log(Number.isFinite(true)); // false

/**
 * 总结
 * ES6中Number.isFinite() 只针对数值进行判断一个数是不是有限
 * 1、 字符串，布尔值，NaN, Infinity, -Infinity 都会返回false
 */





