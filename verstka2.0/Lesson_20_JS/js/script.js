// let someArray = [];
// someArray.push("Nuber 1");
// someArray.push("Number 2");
// console.log(someArray);
// console.log(someArray.length);
// let elem = {}

// function print(elem) {
//     console.log(elem.target);
//     elem.target.style.color = "blue"
// }

// const listItems = document.querySelectorAll('.list__item');
// //console.log(listItems); listItem.style.color = "green"
// listItems.forEach(function(listItem, index, array) {
//     listItem.style.color = "green";
//     listItem.addEventListener('contextmenu', print)

// });


// const blockPrev = document.querySelector('.some-block-prev');
// const blockNext = document.querySelector('.some-block-nex');
const block = document.querySelector('.block');
const blockPrev = block.previousElementSibling; //предыдущий
const blockNext = block.nextElementSibling; // следующий
console.log(blockNext)

const blockParent = block.parentElement //родитель
console.log(blockParent);
// block.addEventListener("click", function(e) {
//     const blockParent = block.parentElement;
//     blockParent.classList.toggle('active');
// })

const blockChildren = block.children; //дети
console.log(blockChildren);

const blockChildrenAll = block.querySelectorAll('*'); //все вложенные
console.log(blockChildrenAll);

const blockFirstChild = block.firstElementChild;
console.log(blockFirstChild);

const blockLastChild = block.lastElementChild;
console.log(blockLastChild);

console.log('событие при клике');

document.addEventListener("click", liteSpoiler);

function liteSpoiler(e) {

    const targetElement = e.target;
    console.log(e);
    if (e.target.firstElementChild) {
        e.target.firstElementChild.hidden = !e.target.firstElementChild.hidden
    }
}


window.addEventListener("scroll", setHeaderStyle);

function setHeaderStyle(e) {
    console.log(`скролл от объекта block ${block.getBoundingClientRect().top}`);
    console.log(`скролл окна ${window.scrollY}`);
    if (block.getBoundingClientRect().top <= 30) {
        block.style["background-color"] = "red";
    } else {
        block.style["background-color"] = "gray";
    }
}

const scrollText = document.querySelector('.scrollText');
scrollText.addEventListener("click", function(e) {
    window.scrollTo({
        top: 3000,
        behavior: 'smooth'

    })
})

document.addEventListener()