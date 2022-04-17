window.addEventListener('storage', function(e) {
    console.log('change');
    document.querySelector('h1').textContent += localStorage.getItem('b1');
});


localStorage.setItem('data', 5);
document.querySelector('.test').innerHTML = localStorage.getItem('data');
let a = [2, 4, 5];
localStorage.setItem('a', JSON.stringify(a));
let b = localStorage.getItem('a');
console.log(a);
console.log(b);
console.log(typeof(b));
b = JSON.parse(b);
console.log(b);
console.log(typeof(b));


const c = {
    hello: 5,
    k: 2,
    4: 'hi'
}

localStorage.setItem('c', JSON.stringify(c));
let d = localStorage.getItem('c');
d = JSON.parse(d);
console.log(d);
console.log(typeof(d));