async function say() {
	return 'hello'
}

// 既然是Promise 那么就是使用then将其执行，参数1就是async的返回值
say().then(function(resolve) {
	console.log(resolve)   // 2后打印
})

console.log('我是后执行，先打印')  // 1