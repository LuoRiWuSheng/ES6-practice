// es2017指定的  该API 返回对象属性的描述对象

var obj = {
	name: "zhangs",
	age: 1,
	get say() {
		return this.age;
	}
};

console.log(Object.getOwnPropertyDescriptors(obj));
