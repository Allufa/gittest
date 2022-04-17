out = document.querySelector('.out-1');
start = document.querySelector('.b1');

const loop = function() {
    let i = 25;
    out.innerHtml = '';
    while (i >= 7) {
        out.innerHTML += `${i}_`;
        i--;

    }

    console.log(out.innerHTML);
};


start.onclick = loop;