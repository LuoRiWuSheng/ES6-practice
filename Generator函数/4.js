function* g() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return "结果"
}

// 一旦next返回的对象的done是 true，for...of是不会再往下执行了，所以最后一个是不会输出的

for(let v of g()) {
    console.log(v)
}

var a =g();
for(let i=0; i<5; i++) {
    console.log(a.next())
}