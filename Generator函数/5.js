// 斐波那契数列  复合规则的数，前2位值和等于当前位  fn = f(n-1)+f(n-2)

function* fbnq() {
    let [prev, curre] = [0, 1]
    for(;;) {
        [prev, curre] = [curre, curre + prev]
        yield curre
    }
}

// for... of是遍历对象的，且在遍历Generator的时候，是不需要调用next的

for(let v of fbnq()) {
    if(v > 1000) {
        break;
    }
    console.log(v)
}