class Father {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Son extends Father {
    constructor(x, y, age) {
        super(x,y)
        this.age = age
    }

    say() {
        console.log(this.x,this.y,this.age)
    }
}

let s = new Son(1,2,'12岁')
s.say()