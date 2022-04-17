const a = {
    "a": 5,
    "b": 'Hello',
    "z2": 'Hi',
    y43: 1999,
    'villa de': 3040,
}
console.log(a.b);
let k = 'y43';
console.log(a[k]);
a.yyyy = 555;
console.log(a);

let out = ''
for (let key in a) {
    out += a[key] + ' ';
}
document.querySelector('.out1').innerHTML = out;

delete a.a;
console.log(a)