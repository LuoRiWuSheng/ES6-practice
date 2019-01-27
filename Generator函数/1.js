function* g() {
  
    yield "你"
    yield "好"
    yield "吗"
    return "?"
}
let a = g();
console.log("1-->",a.next())
console.log("2-->",a.next())
console.log("3-->",a.next())
console.log("4-->",a.next())
console.log("5-->",a.next())
console.log("6-->",a.next())
console.log("7-->",a.next())