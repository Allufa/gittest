//every
let a = [4, 5, 6, 7, 8, 9];
let b = a.every((item => {
    if (item > 3) {
        return true
    }

}))

console.log(b);

const c = [
    { name: 'ivan', age: 42 },
    { name: 'rivan', age: 22 },
    { name: 'wivan', age: 42 },
    { name: 'fivan', age: 52 }
]

let d = c.every(item => {
    if (item.age < 18) {
        return false
    }

    return true
});
console.log(d);