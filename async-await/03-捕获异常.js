async function say(flag) {
	if(flag) {
		return '状态变成resolve'
	} else {
		throw 'Promise的状态变成reject'
	}
}

// console.log(say(true))
// console.log(say(false))

// 处理异常
say(false).catch(err => {
    console.log(err)
})