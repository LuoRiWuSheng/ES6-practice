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