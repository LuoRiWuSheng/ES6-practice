let a = new Set([1,2,3,4,5,6]);
let b = new Set([78,4,5,6,766]);

// 并集（去重以后，将所有数据放到一起）
let bing = new Set([...a, ...b]);

console.log("并集", bing) //  并集 Set { 1, 2, 3, 4, 5, 6, 78, 766 }\

// 交集
let jiao = new Set([...a].filter(x=>b.has(x)));
console.log("交集-->", jiao) // 交集--> Set { 4, 5, 6 }

// 差集
let unique = new Set([...a].filter(x=> !b.has(x)));

console.log("差集-->", unique) // 差集--> Set { 1, 2, 3 }

/**
	思路就是将 Set数据类型转化为数组，然后利用数组的高级方法，将数据筛选出来，然后丢回 new Set中，数组还原成Set数据结构
	Set数据类型只能传数组或者类数组 querySelector('div'), 或者arguments这种类数组,说什么具有Iterator接口的数据类型都行，待研究

	new Set(1)  这种是错误的
*/

