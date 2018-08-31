//console.log(...[1,2,3]);

// 这里的扩展运算符和 rest剩余参数是相反的
// rest是将参数列表归为一个数组
// ... 扩展运算符是将一个数组中的列表转换成参数序列

let arr = [1,22];
function pushNum(arr,...items) {
    
	arr.push(...items);
}

function add(x,y) {
	return x + y;
}

const number = [4,5];
console.log(add(...number));  // 9 这里将数组中的数变成一个一个的参数，所以不用单独把数据提取出来

pushNum(arr,number);
console.log(arr);
