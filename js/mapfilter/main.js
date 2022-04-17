let a = [4, 5, 12, 200, 1, 0, -2];
// let b = a.map(function(item, index) {

//     console.log(item);

//     return item * 2;
// })
console.log(a);
// let b = a.map((item, index) => {

//     return item * 3;
// })


let b = a.map(item => item ** 2)

// let c = b.filter(item => item > 3);
let c = b.filter(function(item, index) {
    return item >= 0;
})


console.log(b);
console.log(c);