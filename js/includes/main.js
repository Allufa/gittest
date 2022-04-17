const a = [3, 4, 5, '6', 7, 8, 9, 10, 0, 0, 0, 0, 10, 10]

console.log(a.includes(10, 0)); //второй параметр - начальная позиция поиска.

let str = 'asfdasfdaklgm';
console.log(str.includes('asf'));


const users = [
    { 'name': 'Ivanov', 'age': 44 },
    { 'name': 'Petrov', 'age': 21 },
    { 'name': 'Pitrov', 'age': 11 },
    { 'name': 'Alexeev', 'age': 43 }
]


let newUsers = users.filter(item => item.name.includes('ov'));
console.log(newUsers);

console.log(document.querySelector('button').innerHTML);
document.querySelector('button').onclick = function(event) {
    console.log(a.includes(+document.querySelector('input').value));

}