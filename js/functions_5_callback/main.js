//callback
const arr1 = [3, 4, 56, 6, 7, 7]
const out1 = document.querySelector('.out1');
const out2 = document.querySelector('.out2');
const out3 = document.querySelector('.out3');


function f1(arr, Func, block) {
    arr[3] = arr[3] * 2;
    Func(arr, block);

};


function myFunc(arr, block) {
    out = ''
    arr.forEach(element => {
        out += element + '_'
    });

    block.innerHTML = out;


}

f1(arr1, myFunc, out1);


//пример с input синхронный callback

document.querySelector('button').addEventListener('click', getname);

function getname() {
    alert('привет')
    console.log(document.querySelector('input').value);
}


//асинхронный callback
async function pageloader1(callback) {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    callback(data.json());

}



async function pageloader2(callback) {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => callback(json));

}

function getAJAX1(data) {
    console.log('отправил запрос');
    console.log('ответ');
    console.log(data);
}



function getAJAX2(data) {
    console.log('отправил запрос');
    console.log('ответ');
    console.log(data);
}

pageloader1(getAJAX1);
pageloader2(getAJAX2);