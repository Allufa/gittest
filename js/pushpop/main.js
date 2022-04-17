const a = [99, 88];
console.log(a);

//push
a[a.length] = 'хитрость';

a.push(2);
a.push(3, 4, 5);
console.log(a);

console.log(a.push('добавляет и возвращает длину массива'));
console.log(a);
a.pop();
console.log(a);
console.log(a.pop()); // - возвращает значение посл удаленного  элемента
console.log(a);

let car = [];
document.querySelector('.push').onclick = () => {
    let id = +document.querySelector('#goods').value;
    if (!car.includes(id)) {
        car.push(id);

        console.log(car);
    } else {
        console.log('repeat');
    }
    document.querySelector('#goods').value = '';

};
document.querySelector('.pop').onclick = () => {
    let id = +document.querySelector('#goods').value;
    let del = car.pop(id);
    document.querySelector('#goods').value = '';
    console.log(car);
    console.log(`товар ${del} был удален`);
};