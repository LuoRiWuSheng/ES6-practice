var a = [1, 2, [22,1212],333]
function* flat(a) {
    var length = a.length;

    for(let i=0; i<length; i++) {
        if(typeof a[i] !== "number") {
            yield* flat(a[i])
        } else {
            yield a[i]
        }
    }
}
for(let f of flat(a)) {
    console.log(f)
}