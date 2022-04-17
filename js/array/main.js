let zodiak = ['Козерог', 1, 1, 19];
console.log(zodiak);
let man = ['Ivan', 'male', 176, 93, 'Ivanov'];
console.log('Длина масива ' + man.length + '    ' + man[1]);

let a = [1, 2, 3, 4, 5];
console.log(a);
// let b = a[0];
// a[0] = a[a.length - 1];
// a[a.length - 1] = b;
// console.log(a);
let out = '';
let max = a[0];
let sum = 0;
for (let i = 0; i < a.length; i++) {
    out += a[i] + ' ';
    sum += a[i];
    if (a[i] > max) {
        max = a[i];
    }
}
document.querySelector('.out1').innerHTML = out;
console.log(max);
console.log(sum);

a[10] = 10;
console.log(a, '             ', a.length, '   ', a[7]);