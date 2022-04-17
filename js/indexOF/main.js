const a = [3, 4, 5, '6', 7, 8, 9, 10, 0, 0, 0, 0, 10, 10]

//-1 при отсутствии элемента

console.log(a.indexOf(5));
console.log(a.indexOf(55));
console.log(a.indexOf(10, 8)); //вторая переменная - с какой стартовать поиск.
console.table(a);

if (a.indexOf(6) !== -1) {
    console.log('yes');
} else
    (console.log('no'));

b = ['hi', 'hello'];
console.log(b.indexOf('Hello'));