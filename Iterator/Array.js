var a = [1,2,4]
// 原生数组具备Symbol.iterator接口，调用，得到遍历器对象
var arr = a[Symbol.iterator]()

console.log(arr.next())
console.log(arr.next())
console.log(arr.next())
console.log(arr.next())

console.log(`----------`)
for(let i of a) {
  // for ... of 拿到所有的值
  console.log(i)
}

console.log(`----------`)
// for ... of 只会返回具有数字索引的属性

/**
 * 数组 ['hello', 'word']
 *  [
 *    0: 'hello',
 *    1: 'world'
 *  ]
 */
var d = ['hello', 'word']
d.exact = '我是额外的，不具备数组索引下标的属性'
for(let j of d) {
  console.log(j)
}
console.log(d)
console.log(`----------`)
// for ... in 则都会遍历出来
for(let k in d) {
  console.log(k)
}

/**
 * for... in 和for ...of的区别
 *
 *  - for ... in 可以遍历数组下班不是数字的属性， for ..of则会跳过
 *  - for ... in 循环读取的是键名 key;  for...of 直接读取的是键值value
 *  - for ... in 遍历的顺序是不一定的； for.. of 是从具有相应的iterator数据接口的开始遍历
 *  - for ... in 会遍历原型链上的属性，比较适合对象，不适合数组的遍历
 *  - for ... of 可以使用break、continue和return跳出遍历
 */
