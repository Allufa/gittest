//concat	
const a1 = [1, 2, 3, 4, 5];
const a2 = [11, 22, 33, 44];
const a3 = [];
a3[100] = 100;
const b = a1.concat(a2, a3); // [1, 2, 3, 4, 5, 11, 22, 33, 44, empty × 100, 100]
console.log(b);
//concat string

let c = 'hello';
let d = 'hi';
let f = c.concat(d);
console.log(f); // hellohi

//splice

let k = [55, 66, 77, 88, 99, 00];
console.log(k);
console.log(k.splice(2, 2)); //[77, 88]
console.log(k); //[55, 66, 99, 0]