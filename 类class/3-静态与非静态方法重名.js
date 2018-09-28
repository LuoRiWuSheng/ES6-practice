class Foo {
    static bar() {
        this.baz();
    }
    static baz() {
        console.log('hello');
    }

    constructor(x) {
        this.x = x
    }
    baz() {
        console.log('world');
    }
}

let f = new Foo(121212)

f.baz()

// 注意，我们的这个 类中的方法（非静态） 方法名不要个constructor中的实例属性重名，不然，在通过  实例对象.方法名  显示 xxx方法 is not a function