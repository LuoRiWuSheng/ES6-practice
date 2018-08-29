let x = 2;

function bar(func = ()=> x) {
	let x = 12;
	console.log(func()); 
}

//bar();

function foo(x,y = function() {x = 12;}) {
	//var x = 5;
	y();

	console.log(x); //5
}
foo();
console.log(x); //2