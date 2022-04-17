document.querySelector('.one').onclick = function(event) {
    console.log(event.clientX);
    console.log(event);
    console.log('click');
    this.classList.toggle('active');
};

document.querySelector('.two').onclick = function(event) {
    console.log('click2');
    this.classList.toggle('active');
    console.log(event);
};

document.querySelector('.two').ondblclick = function(event) {
    console.log('doubleclick');
    this.classList.toggle('dblactive');
    console.log(event);
}

document.querySelector('.two').oncontextmenu = function(event) {
    console.log('rightclick');
    this.classList.toggle('rightclick');
    console.log(event);
    return false // выключаем контекстное меню правой кнопки
}
let w = 50;
document.querySelector('.three').onmousemove = function(event) {
    console.log('moove');
    w++;
    this.style.width = w + 'px';
    this.style.height = w + 'px';
    this.style['line-height'] = w + 'px';
};
document.querySelector('.four').onmouseenter = function(event) {
    this.style.color = "green";
    this.style['text-transform'] = "uppercase";
}
document.querySelector('.four').onmouseleave = function(event) {
    this.style.color = "green";
    this.style.transition = "all 0.5s cubic-bezier(0.88, 0.31, 1, 1) 0s";
    this.style['text-transform'] = "lowercase";
}

document.querySelector('.four').onmousedown = function(event) {
    this.style.background = "green";

}

document.querySelector('.four').onmouseup = function(event) {
    this.style.background = "blue";

}
document.querySelector('button').onclick = function() {
    document.querySelector('progress').value += 3;
}