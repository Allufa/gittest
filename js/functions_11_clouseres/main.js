// лок глоб область видимости
let a = 10;

function f1() {
    console.log('global ' + a);
}
f1();

function f2() {
    let a = 20;
    console.log('local ' + a);
}
f2();

f1();

//счетчик

function createStep(n = 0) {
    let count = n;
    return function() {
        count++
        console.log(count);
    };

}

let z = createStep();
let w = createStep(200);
z();
z();
w();
z();

// попрошайка
console.log('попрошайка')

function randomInteger(min, max) {
    return Math.ceil(min + Math.random() * (max - min));
}

function globBeggar() {
    let s = 0;
    return function beggar() {
        s = s + randomInteger(0, 100);
        console.log(s)
        if (s >= 300) return
        beggar();
    }
};

let b1 = globBeggar()
let v1 = globBeggar()

b1();
console.log("_______________")
v1();