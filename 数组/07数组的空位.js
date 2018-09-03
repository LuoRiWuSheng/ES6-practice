let arr = Array(3);
console.log(0 in arr);  // false

console.log(0 in [undefined,undefined,undefined]);  // true

// 下面的方法会跳过数组的空位，空位并不是undefined,空位就是没有值，如果数组中的一个位置是Undefined ，那是有值的，不能称之为空位，所以说，undefined也是一个值

/**
 * forEach
 * filter
 * reduce
 * every
 * some
 * 以上的方法会跳过空位--从打印的数组索引就知道
*/
let test = [,1,,3,55];

test.forEach((item,index)=> console.log(index));  // 1,3,4 并没有打印0，2索引

let filterResu = test.filter(()=> true);
console.log(filterResu); // [1,3,55]

let sum = test.reduce((x,y)=> x+y);
console.log(sum);

let some =  test.some(x=> x > 0);
console.log(some);

let every = test.every(x=>x>0);
console.log("every",every); // true

/**
 * map方法会跳过空位，但是会保留这个值
 * 
*/
let map = test.map(()=> 1);
console.log(map);

/**
 * join 和toString会将空位视为undefined
 * 而undfined和null会被处理成   空字符串
 */
let joinRes = [,1,,2,,undefined,'呵呵',null].join("-"); // -1--2---呵呵-  这说明 1前面是有一个空位的
console.log(joinRes);

let str = [,1,2,,4,null,undefined].toString();
console.log(str);







