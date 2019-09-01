var m = new Map()

m.set('name', '张三')
m.set('sex', '16')

// 这里进行了解构赋值
for(let [key, value] of m) {
  console.log(`${key}---${value}`)
}

// 这里的item 是一个数组
for(let item of m) {
  console.log(item)
}

// map结构，遍历器遍历的每一项，返回的是一个数组
