// 扩展运算符与解构赋值一起使用

//es5
let list = [1,2,3,5];
let a = list[0];
let rest = list.slice(1);
// 上面就拿到了list中的第一个元素1，和另一个切割出来的数组[2,3,5]

//es6的写法

let [b,...list2] = list;
console.log(b,list2);

