const b1 = document.querySelector('.b-1');
const b2 = document.querySelector('.b-2');
// b1.onclick = test;

function test(color, num) {
    console.log(this);
    console.log(num)
    this.style.background = color;
}
console.log(this);

//test() - вызывает ощибку с this



// b2.onclick = function() {
//     test.call(b1, 555);
// }

// b2.onclick = function() {
//     test.apply(b1, [555]);
// }

let a = test.bind(b1, 'red', 'context b1');
let b = test.bind(b2, 'black', 'context b2');

b1.onclick = a;
b2.onclick = b;