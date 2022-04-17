const a = [1, -5, 1, -6, 1, 100, -500, 108];
console.table(a);
let b = a.reduce((accum, item) => {
    if (item > 0) {
        console.log('accum=' + accum);
        console.log('item=' + item);
        return accum += item;
    }
    return accum;


}, 0)
console.log('___сумма всех положительных чисел____');
console.table(b);


let c = a.reduce((accum, item) => {
    if (item > accum) { accum = item }
    return accum;
});

console.log('_____макc число в массиве________');
console.log(c);


let d = [
    { "id": 55, "city": "ufa" },
    { "id": 65, "city": "fau" },
    { "id": 75, "city": "auf" },
];



let e = d.reduce((accum, item) => {
    accum.push(item.id)
    return accum;
}, []);
console.log('_____только индексы_________')
console.log(e);
console.log(Array.isArray(e));

let a12 = [4, 5, 4, 55, 44, 54, 44, 44, 8888, 4448, 44, 41];

let b12 = a12.reduce((accum, item, index) => {
    if (item > accum) {
        accum = item

    }
    return accum
})
console.log('_______макс число в массиве________');
console.log(b12);
console.log('_______индекс макс числа в массиве________');
console.log(a12.indexOf(b12));


console.log('____13 задача______');
let a13 = [
    [4, 5, 8, 7, 5, 4, 5, 4, 5],
    [4, 5, 8, 7, 5, 4, 5, 4, 5, 4, 5, 444, 44],
    [4, 5, 8, 7, 5, 4, 5, 4, 5, 4, 5, 444, 44, 11, 11, 14, 5, 444, 44, 11, 11, 14, 15],
    [4, 5, 8, 7, 5, 4, 5, 4, 5, 4, 5, 444, 44, 11, 11, 14],
];


let b13 = a13.reduce((accum, item) => {
    console.log('item ' + item.length);
    console.log('accum ' + accum);
    if (item.length > accum) { accum = item.length }
    return accum;
}, 0);
console.log('____длина самого  большого вложенного массива______');
console.log(b13);

console.log('____14 задача______');
let a14 = [
    [4, 5, 8, 7, 5, 4, 5, 4, 5],
    [4, 5, 8, 7, 5, 4, 5, 4, 5, 4, 5, 444, 44],
    [4, 5, 8, 7, 5, 4, 5, 4, 5, 4, 5, 444, 44, 11, 11, 14, 5, 444, 44, 11, 11, 14, 15],
    [4, 5, 8, 7, 5, 4, 5, 4, 5, 4, 5, 444, 44, 11, 11, 14],
];

let b14 = a14.reduce((accum, item) => {
    if (item.length > accum.length) {
        accum = item;
    };;
    return accum;

});
console.log('____самый  большой вложенный массив______');
console.log(b14);


console.log('____15 задача______');

let a15 = [
    { "id": 1, "city": "ufa" },
    { "id": 1, "city": "fau" },
    { "id": 1, "city": "auf" },
    { "id": 1, "city": "auf" },
    { "id": 1, "city": "auf" },
    { "id": 1, "city": "auf" },
    { "id": 15, "city": "auf" },
];


let b15 = a15.reduce((accum, item) => {
    accum += item.id
    return accum;
}, 0)
console.log('____среднее арифметическое значение id______');
console.log(b15 / a15.length);


console.log('____16 задача______');

const a16 = [-1, -5, -1, -6, -1, -100, -500, -108];
let c16 = {};
let b16 = a16.reduce((accum, item, index) => {
    c16[index] = item;
    return accum;
}, 0);

console.log(c16);

console.log('____ 17 задача______');

let a17 = {

    "1": "ufa",
    "2": "fau",
    "3": "auf",
    "4": "auf",
    "5": "auf",
    "6": "auf",
    "7": "auf"
};

let a17_res = Object.values(a17);

console.log(a17_res);