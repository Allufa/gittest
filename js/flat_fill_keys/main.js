//flat
let a = [3, [4, 5],
    [8, [44, 5]]
];
let b = a.flat(2)
console.log(b);
//fill
let c = [1, 1, 1, 1, 4, 4, 4, 4, 4, 4];
let d = c.fill(2, 1, 4);
console.log(d);
console.log(c);

//keys

console.log(Object.keys(c));