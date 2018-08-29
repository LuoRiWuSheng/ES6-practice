let {cos, sin, log} = Math;

console.log(cos);

let res =  [[1,2],[3,4]].map(([a,b])=> {
	return a + b;
});
console.log(res); // [3 , 7]

[[1, 2], [3, 4]].map(([a, b]) => a + b);
