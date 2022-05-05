// pure function
function squad(n) { return n ** 2 };
console.log(squad(4));
console.log(squad(-4));


//side effects
function squad2(n) {
    document.querySelector('.out1').textContent = n ** 2;
}
squad2(4);
let count = 0;
console.log('counter=' + count);

function myCount() {

    return ++count;

}

console.log(myCount());
console.log(myCount());
//impure functions
function randomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};


for (let i = 0; i < 5; i++) {
    console.log(randomInt(100, 200)); //консоль - сайд эффект
};

function year(d) {
    let today = new Date();
    today = today.getFullYear();
    return (today - d);
};

console.log(year(2005));

//функция высшего порядка

function podd() {
    console.log('odd');
}

function pedd() {
    console.log('edd');
}


function myNumber(n, podd, pedd) {

    if (n % 2 === 0) return podd;
    else return pedd;
}

let z = myNumber(4, podd, pedd);
z();

(myNumber(4, podd, pedd))();

const w = [
    { name: "Ivan", age: 25 },
    { name: "Tvan", age: 28 },
    { name: "Mvan", age: 26 },
    { name: "Rvan", age: 24 }
];

let w1 = [];

for (let i = 0; i < w.length; i++) {
    if (w[i].age >= 26) w1.push(w[i]);
};

console.log(w1);

w2 = w.filter((item, index) => {
    if (item.age >= 26) return true;

})
console.log(w2);