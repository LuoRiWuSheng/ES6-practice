// es5
let res = new (Date.bind.apply(Date,[null,2015,1,1]));
console.log(res.getFullYear()+"-"+res.getMonth()+"-"+res.getDate());

// es6 
let res2 = new Date(...[2015,1,1]);
console.log(res2.getFullYear()+"-"+res2.getMonth()+"-"+res2.getDate());
