class Foo {
    a = 12
    
    say() {
        console.log(this.a)
    }
}

let f = new Foo()

f.say()