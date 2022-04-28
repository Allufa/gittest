// контекст= область видимости+переменная this
//this -ссылка на объект, который вызывает функцию

let count = 0;

function f1() {
    console.log(count);
    console.log(this);
    this.textContent = count;
    count++;
};

f1();
document.querySelector('button').addEventListener('click', f1);

//call -замена контекста
f1.call(document.querySelector('input'));

//частичные функции, переопределенные аргументом (частичные вычисления)

function sum3(a, b, c) {
    console.log(arguments);
    this.innerHTML = a + b + c;

}
const sum4 = sum3.bind(document.querySelector('.b6'), 10) // - замена аргумента 1,2,3 на 10,1,2

document.querySelector('.b6').addEventListener('click', () => {
    sum4(1, 2, 3);
})


//вытягивание методов
const validate = {
    password: 'haihai',
    email: 'mail@mail.ru',
    isValid: false,
    sayHai() {
        console.log(this);
        return (this.password.length > 6) ? true : false;
    }
};

console.log(validate.sayHai());


const obj = { password: "heddddllo" };

const val2 = validate.sayHai.bind(obj);
console.log(val2());