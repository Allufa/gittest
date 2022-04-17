let out = document.querySelector('.out');
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 5; k++) { out.innerHTML += k * i; }

    out.innerHTML += '<br>';

};


let out2 = document.querySelector('.out2');
for (let i = 1; i <= 3; i++) {

    for (let k = 1; k <= 3; k++) {
        out2.innerHTML += `${i}*${k}=${i*k}<br>`;
    }
    out2.innerHTML += `<hr>`;
}
let out3 = document.querySelector('.out3');
for (i = 0; i < 3; i++) {
    for (k = 0; k < 3; k++) {
        out3.innerHTML += '*'
    }
    out3.innerHTML += '_'
}
let out4 = document.querySelector('.out4');
for (i = 1; i <= 3; i++) {
    //   out4.innerHTML += `${i}<br>`;
    for (k = 0; k < 3; k++) {
        out4.innerHTML += '*_';
    }
    out4.innerHTML += `<br>`;

}