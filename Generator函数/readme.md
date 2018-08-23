# Generator函数

generator的特征：

- function 关键字和函数名中间有一个*号
```js
    function* show() {}
    // 或者
    function *show() {}
    // 或者
    function * show() {}
    // 或者
    function*show() {}
```
- 函数体内部使用yield 定义不同的状态
```js
    function* firstGenerator() {
        yield 'hello';
        yield 'world';
        return "ending";
    }
    var g = firstGenerator();// 返回一个遍历器对象
    g.next();// {value: 'hello',done: false}
    g.next(); // {value: 'world', done: false}
    g.next(); // {value: 'ending', done: true}
    g.next(); // {value: undefined, done: true}
```
>   一个generator函数只能有一个return，但是可以有多个yield，yield能g够控制函数暂停执行,调用next()后，下次执行从该位置开始，具有记忆功能，return不具备记忆功能