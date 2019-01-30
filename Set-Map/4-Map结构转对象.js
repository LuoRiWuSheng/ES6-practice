let m = new Map([["a", 1], ["b",2]]);
console.log(m.size) //2

function strMapToObj(map) {
	let o = Object.create(null);

	for(let [k, v] of map) {
		o[k] = v;
	}

	return o;
}

console.log(strMapToObj(m))

