let a = 0;


function rec() {
    console.log(a);
    a++;

    if (a > 10) {
        console.log(a);
        return a
    }
    rec()
}

rec()

let offset = 0;

function move() {
    offset += 1;
    document.querySelector('.test').style['margin-left'] = offset + 'px';
    if (offset > 300) { return true };
    setTimeout(move, 1);

};

document.querySelector('button').onclick = move;