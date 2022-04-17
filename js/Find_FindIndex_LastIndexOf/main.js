//find
const a = [1, 2, 3, 4, 5];
let b = a.find(item => {
    if (item === 4) { return true };
});

console.log(b);