const one = document.querySelector('.one');
one.style.color = 'red';
one.style.width = "150px";

const two = document.querySelector('.three');

two.classList.add('two');

two.onclick = function() {
    this.classList.toggle('two');

}
console.log(one.getAttribute('data'));
one.onclick = () => { one.innerHTML += one.getAttribute('data'); }
one.setAttribute('data-num', 'atrrtwo');

let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function() {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data');
        console.log(gallons * amount);
    }
}