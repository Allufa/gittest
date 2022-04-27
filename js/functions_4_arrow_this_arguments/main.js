function sum(a, b) {
    return a + b;
};
let a = sum(2, 3);
console.log(a);

document.querySelector('button').addEventListener('click', () => {
    let res = sum(23, 45);
    console.log(res);

});


//callback
const ar1 = [4, 5, 6, 7, 8];
const res2 = ar1.map(pow2)


function pow2(item, index) {
    return item ** 2
};

console.log(res2);
//стрелочные функции
const res3 = ar1.map(item => item ** 3);
console.log(res3);

//четные элементы массива
const res4 = ar1.filter((item, index) => index % 2 === 0)
console.log(res4);

document.querySelector('button').addEventListener('click', () => {

    console.log(this);

});


document.querySelector('button').addEventListener('click', function() {

    console.log(this.textContent);

});


//arrow аргументы

const f1 = () => {

};