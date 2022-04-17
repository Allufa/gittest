let a = 5;
a = a * 2;
try {
    document.querySelector('.test').innerHTML = a;
} catch (err) {
    console.log('1    ' + err);
} finally {
    console.log('работает')
}
console.log(a);

function t1() {
    console.log('hello');
}

t1();