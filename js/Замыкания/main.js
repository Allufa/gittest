function t1() {
    let a = 0;

    return function() {
        a += 1;
        return a;
    }
}

let b = t1();
console.log(b());
console.log(b());
let c = t1();
console.log(c());