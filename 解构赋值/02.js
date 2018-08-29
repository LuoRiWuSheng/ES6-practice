/**
 * 对象的解构赋值
 */
let {foo,bar} = {foo:"你好",bar:"javascript"};

console.log(foo,bar);

let {foo2,bar2} = {bar2:"你好",foo2:"javascript"};
console.log(foo2,bar2);

// 以上说明，对象的解构，如果指明了key，位置在哪里摆放是无所谓的