function* g(x) {
    console.log(`x==>${x}`)
    var y = 2 * (yield ( x +1))
    console.log(`y==>${y}`)

    var z = yield (y / 2)
    console.log(`z==>${z}`)
    return (function() {
        console.log(`x-->${x},y-->${y},z-->${z}`)
        return (x+y+z)
    })()

}

var gg = g(3) // 这里传3 ,那么x=3
console.log(gg.next(10)) // 这个next传10，这个参数是没有用的，generator会忽略它，这里y = 3+1 = 4
console.log(gg.next(12)) // 12作为第二个yield的参数， y = 12*2 = 24
console.log(gg.next(8)) // 这里传8，计算return后面的表达式 x=1 ,y = 12,z = 8

