let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');

button.onclick = function() {
    console.log(+inputIn.value + 10 + +document.querySelector('.out').innerHTML);
    document.querySelector('.out').innerHTML = inputIn.value;
    console.log(+document.querySelector('.out').innerHTML);
};