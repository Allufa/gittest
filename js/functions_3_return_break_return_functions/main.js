//return

let l = [1, 'a', 'b', 0, 11, 22, 15];


let x = l.filter((item, index) => {
    if (item === +item) {
        console.log(index);
        return true
    }

})




console.log(x);

y = filter_list([1, 2, 'a', 'b']);
console.log(y);



function filter_list(l) {
    l = l.filter((item, index) => {
        if (item === +item) { return true }
    })
    return l;
}

let in1 = document.querySelector('input');
let bu1 = document.querySelector('button');
let ou1 = document.querySelector('.out1');
let ou2 = document.querySelector('.out2');
bu1.onclick = () => {
    // console.log(ou1);
    //console.log(in1.value);
    ou1.textContent += in1.value;
}

document.querySelector('button').addEventListener('click', () => {
    console.log(clearText(in1.value) + 'hi');
    ou2.textContent += clearText(in1.value);
})

function clearText(data) {
    return data.trim().toLowerCase();
}
//прерывание

function t4() {
    console.log(1);
    console.log(2);
    return 11;
    console.log(3);

};
t4();


function indexOfEmul(arr, num) {
    return arr.indexOf(num);
};
let result = indexOfEmul(l, 11);
console.log(result);

// возврат функции


function t8() {
    return t4
}
let s = t8()
console.log(s());