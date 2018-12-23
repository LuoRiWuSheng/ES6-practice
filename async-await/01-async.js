async function say() {
	return 'hello'
}
console.log(say()) // 返回的是一个 Promise对象
console.log('我是后执行，但是先打印')
