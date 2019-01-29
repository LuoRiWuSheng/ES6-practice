function* g(x) {
    console.log(`x==>${x}`)
    console.log("调用第一个next，下面的是不会再执行了，因为遇到了下一个yield")

    var y = 2 * (yield ( x +1)) // 1
    console.log(`y==>${y}`)
    
    console.log("再调用nex，就会执行到这里，就不再往下走了")

    var z = yield (y / 2) // 2
    console.log(`z==>${z}`)
    return (function() {
        console.log(`x-->${x},y-->${y},z-->${z}`)
        return (x+y+z)
    })()

}

var gg = g(3) // 这里传3 ,那么x=3
console.log(gg.next(10)) // 这个next传10，这个参数是没有用的，generator会忽略它，这里y = 3+1 = 4
console.log(gg.next(12)) // 12作为上一个yield的返回参数，也就是1那个位置的返回参数，y = 12*2 = 24
//console.log(gg.next(8)) // 这里传8, 那么2这个位置的yield的返回值是8，那么z = 8  但是会执行最后 return的结果，也就是 3+24+8 = 35

/***
 * 每次调用next，传入的参数，是作为【上一个】 yield的返回值，不论上一个yield的表达式是什么，但是执行的指针会向下移动一个，直到遇到下一个yield就暂停
 *  调用next的返回value，是上一个yield的返回，第一次调，只是启动，遇到第二个generator就停止了
 * /


