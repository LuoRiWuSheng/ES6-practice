var o = {
	a: 1,
	b: 2
}

function objToMap(obj) {
	let m = new Map();

	for(let key of Object.keys(obj)) {
		m.set(key, obj[key]);
	}

	return m;
}
console.log(objToMap(o)) // Map { 'a' => 1, 'b' => 2 }