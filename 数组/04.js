// 数组的复制
const a1 = [1,2];
const a2 = [...a1];

console.log("a1-->",a1);
console.log("a2-->",a2);

// 修改a2的值
a2[0] = "哈哈";
console.log("a1-->",a1);
console.log("a2-->",a2);
// 修改以后，没有相互影响，说明是深度复制，而不是浅克隆（指针）

const [...a3] = a1;
console.log("a3-->",a3);
