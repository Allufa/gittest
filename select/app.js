//1 получать значение
const select1 = document.querySelector('.select-1');
// select1.onchange = function() {
//   console.log(this.value);
// };



select1.addEventListener('change', function() {
    console.log(select1.value);
})

//2 получить текст из option
select1.onchange = function() {
    let index = select1.selectedIndex // индекс выбранного
    console.log(index);


    let options = select1.options //все
    console.log(options[index].textContent);
    console.log(options[index].value);
    //  options[index].textContent = 'choose';
};

//меняем  выбранный селект по умолчанию
console.log('было ' + select1.options[4].selected);
select1.options[4].selected = true;

console.log('стало ' + select1.options[4].selected);


// выбор элемента по-умолчанию
const select2 = document.querySelector('.select-2');

select2.addEventListener('change', function() {
    console.log(select2.value);
})


// порядок и создание

const city = {
    "756135": "Warsaw",
    "7034481": "Kiiv",
    "3067696": "Prague"
}

const select4 = document.createElement('select');
for (let id in city) {
    const option = document.createElement('option');
    option.value = id;
    option.textContent = city[id];

    select4.append(option);
}
document.querySelector('.out-4').append(select4);

// полное управление созданием и порядком вывода селекта

const city2 = [
    { "City": "Warsaw", "id": "756135" },
    { "City": "Kiiv", "id": "7034481", "selected": true },
    { "City": "Prague", "id": "3067696" }
]


const select5 = document.createElement('select');

for (let i = 0; i < city2.length; i++) {
    const option = document.createElement('option');
    option.value = city2[i].id;
    option.text = city2[i].City;
    if (city2[i].selected) { option.selected = true };

    select5.append(option);

}

document.querySelector('.out-5').append(select5)