document.querySelector('.b-1').onclick = () => {
    console.log(document.querySelector('.i1').value);
    //document.querySelector('h1').style.color = document.querySelector('.i1').value;
};
document.querySelector('.i1').oninput = () => {
    document.querySelector('h1').innerHTML = document.querySelector('.i1').value;
}
document.querySelector('#btn2').onclick = () => {
    if (document.querySelector('#i2').checked) {
        console.log(document.querySelector('.i1').value);
        document.querySelector('.i1').value = --document.querySelector('.i1').value;
    }
}
document.querySelector('#textbutton').onclick = (event) => {
    event.preventDefault();
    let form = document.querySelector('form');
    console.log(form.elements.texter.value);
    console.log(form.elements.n2.value);

    //console.log(document.querySelector('#texter').value);
    //document.querySelector('#texter').value = ''
}