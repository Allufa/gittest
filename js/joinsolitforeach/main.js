let a = 'hello, hi, mahai'
console.log(a.split(','))

let b = [10, 20, 30];
console.log(b);
console.log(b.join('-'));


b.forEach(function(elem, index) {
    console.log(index);

})
console.log(b)
a1 = [2, "hello", 3, "hi", 4, "Mazai"];
let a1_res = [];
let i = 0;
a1.forEach(function t1(elem, index) {
    if (typeof(a1[index]) == 'number') {
        a1_res[i] = a1[index];
        i++;
    }





});
console.log(a1_res)