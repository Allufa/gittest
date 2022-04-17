let c = '((()))()';
console.log(c.length);
document.querySelector('h3').innerHTML = c.length;
let counter = 0;
for (let i = 0; i < c.length; i++) {
    if (c[i] == '(') {
        counter++;
    }
    if (c[i] == ')') {
        counter--;
    }
    if (counter < 0) {
        console.log(false);
        break;
    }

};

if (counter == 0) {
    console.log(true);
}
let div = document.querySelectorAll('.class');


function two() {
    console.log('work');
};

for (let i = 0; i < div.length; i++) {
    div[i].style.background = 'red';
    div[i].onclick = two;
};





document.querySelector('button').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');


    for (let i = 0; i < r.length; i++) {
        if (r[i].checked) {
            console.log(r[i].value);
            break;
        }
    }
};



const t1 = function() {
    let task1 = document.querySelector('.out-1');

    for (let i = 25; i >= 7; i--) {
        document.querySelector('.out-1').innerHTML += i + '_';
    }


}

document.querySelector('.b-1').onclick = t1;