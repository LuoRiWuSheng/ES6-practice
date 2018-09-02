// 注意：这个方法会覆盖原有数组 --是一个实例方法
let originArr = [11,22,33,44,"zhong",6,7,8];
// 从originArr数组下标的第0位（11位置）开始替换，替换的数据是，从第3位，截至到第4位（44） 3-5（44,"zhong"） 只替换2位 不含下标为5的
 originArr.copyWithin(0,3,5);
 // copyWithin参数2和参数3是截取一段数据，从参数1开始去替换

console.log(originArr);
console.log([11,22,33,44,"zhong",6,7,8]);

