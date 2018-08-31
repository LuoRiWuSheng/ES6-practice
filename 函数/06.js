// rest是一个真正的数组，可以使用数组的所有方法

let foo = (arr,...items)=> {
	items.forEach(item=> {
		arr.push(item);
		console.log(item);
	});
	console.log(arr);
    
};
let a = [];
foo(a,1,2,3,4);