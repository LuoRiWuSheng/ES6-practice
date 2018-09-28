## ES6笔记
---
### let 和const
>通过let和const声明的内容是不会挂载到window上的，所以，需要注意，var声明的变量是会挂载到window上。
>所以，在箭头函数中的this，会发现，输出的值和想象的不一样。

```js
// 箭头函数没有this
let id = 12;
var id2 = 32;
function foo() {
    let id = "inner";
    setTimeout(()=> {
        console.log('id',this.id);// undefined
        console.log("id",this.id2); // 32 这里的id2是挂载到window上的，而这里的this === window
    })
}
foo();

// 对比下面的ES5的写法，this还是window
var kk = "哈哈";
function baz() {
    let _this = this;
    let kk = "hh";
    setTimeout(function() {
        console.log(_this.kk); // 这里等价于 window.kk
    },100);
}
baz();
```

### 解构赋值

### 关于字符串的那些事

### 正则

### 数值

### 数组


### 对象

### class类

**注意**

- 我们的这个 类中的方法（非静态） 方法名不要个constructor中的实例属性重名，不然，在通过  实例对象.方法名  显示 xxx方法 is not a function

```js
class Foo {
    // 类的静态方法
    static say() {
        return 'hello'
    }

    // 实例属性
    constructor(n) {
        this.name = n
    }

    // 类的非静态方法 -- 原型上的
    name() {
        console.log(this.name)
    }

    say() {
        console.log('我和静态方法重名，没事的，可以通过实例去调用')
    }
}
// 实例化
let f = new Foo('李四')
f.name() // f.name is not a function

/**
 * 为啥？？？
 * 因为 name和constructor中的名称重名了
 * say方法就不会有问题
 * /
```
