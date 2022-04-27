//формальные аргументы

function sum(x1 = 0, y1 = 0) {
    console.log(x1 + y1);
};

sum(77, 44);
sum(7744);

function showSome(elem, x, y) {
    document.querySelector(elem).textContent = x + y;
};

showSome('.out1', 1, 3);

function showSome1(elem, x, y) {
    elem.textContent = x + y;
    console.log(arguments);
    console.log(arguments[2]);
};
showSome1(document.querySelector('.out2'), 5, 6);
//объект аргументов
function showSomeAll() {
    console.log(arguments);
    console.log(Array.isArray(arguments));
    console.log(typeof(arguments));
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    };
    console.log(sum);

    let sum2 = Array.from(arguments).reduce((accum, item) => accum += item);
    console.log(sum2);




}

showSomeAll(4, 5, 6, 555);

//массив аргументов
function showSomeAll2(...args) {
    console.log(args);
    console.log(Array.isArray(args));
    let sum2 = args.reduce((accum, item) => accum += item);
    console.log(sum2);




}

showSomeAll2(1, 1, 1, 11);

//функция как аргумент


function showAll(res) {
    document.querySelector('.out3').innerHTML = `<b>${res}<b>`;
};

function showSomeAll3(y, ...x) {
    y(x);
}


showSomeAll3(showAll, 45, 45, 45, 45);