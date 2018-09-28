class Foo {
    constructor (x, y) {
        this.x = x
        this.y = y
    }

    say () {
        console.log(this.x)
    }
}

let f = new Foo(1,2)
f.say()

console.log(Foo.prototype); // 是没有原型方法的

// es5 的写法

function Bar (x, y) {
    this.x = x
    this.y = y
}

Bar.prototype.say = function() {
    console.log(this.x)
}

var b = new Bar(11,21)
b.say()

console.log(Bar.prototype) // 显示原型上的方法/属性

