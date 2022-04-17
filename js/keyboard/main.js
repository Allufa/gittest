document.querySelector('.i-1').oninput = function(event) {
    //   console.log(event);
}

document.querySelector('.i-1').onchange = function(event) {
    //  console.log(event);
    //console.log(this.value);
}

document.querySelector('.i-1').onkeypress = function(event) { //цифры буквы ентер пробел и символы
    console.log('keypress')
    console.log(this.value);
    console.log('charcode ' + event.charCode);
    console.log('code ' + event.code);
    console.log('keycode ' + event.keyCode);
    console.log('key ' + event.key);
    //console.log(event);
}

document.querySelector('.i-1').onkeydown = function(event) { //цифры буквы ентер пробел и символы

    console.log('keydown')
    console.log(this.value);
    console.log('charcode ' + event.charCode);
    console.log('code ' + event.code);
    console.log('keycode ' + event.keyCode);
    console.log('key ' + event.key);
    //console.log(event);
    if (event.key == 'CapsLock') {
        document.querySelector('.caps').checked = !document.querySelector('.caps').checked;
    }

}


document.querySelector('.i-1').onkeyup = function(event) { //цифры буквы ентер пробел и символы

    console.log('keyup')
    console.log(this.value);
    console.log('charcode ' + event.charCode);
    console.log('code ' + event.code);
    console.log('keycode ' + event.keyCode);
    console.log('key ' + event.key);
    //console.log(event);


}

document.querySelector('.i-2').onkeypress = function(event) { //цифры буквы ентер пробел и символы
    console.log('keypress')
    console.log(this.value);
    console.log('charcode ' + event.charCode);
    console.log('code ' + event.code);
    console.log('keycode ' + event.keyCode);
    console.log('key ' + event.key);
    //console.log(event);
    const a = {
        a: 'w',
        w: 'e'
    }
    document.querySelector('.i-2').value = a[event.key];
    return false;
}