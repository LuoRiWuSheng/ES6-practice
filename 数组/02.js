// 展开数组

// es5的写法，apply -- 直接将参数都展开了
function f(x,y,z) {
	console.log(x,y,z); //0 1 2
}

var args = [0,1,2];
f.apply(null,args);

// es6的写法
f(...args);

// es5的写法
var arr3 = [11,22,33];
var arr4 = [44,55,66];
Array.prototype.push.apply(arr3,arr4);
console.log(arr3,arr4);


// 合并2个数组--es6的写法
var arr1 = [1,2,3];
var arr2 = [4,5,6];
arr1.push(...arr2);
console.log(arr1); //[ 1, 2, 3, 4, 5, 6 ]
