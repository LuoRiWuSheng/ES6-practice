// 常规的Promise写2个数的求和,模拟一种场景，n1是第一次向服务器发送请求，n2是第二次，n3是第三次，现在把3种返回结果求个和

function add(n1){
	return new Promise((resolve, reject) => {
		setTimeout(()=> {	
			resolve(n1 * 2)
		}, 2000)
	});
}

add(1).then(res=> {
	console.log(res)
})

// async-await写法
async function t() {
	console.time('test')
	let n1 = await add(1)
	let n2 = await add(2)
	let n3 = await add(3)
	console.timeEnd('test') // 差不多6s多
	console.log(n1+n2+n3)
}
t()
