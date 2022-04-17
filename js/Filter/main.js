const a = [2, 3, 4, 2, 3, 5, 6, 3, 7, 1, 6, 8, 9, 0, 5];
console.log(a);
let b = a.filter(item => {
    if (item > 5) {
        return true
    };

})

console.log(b);


const clients = [
    { "inn": "g8445d53dd", "user": "Ivanov", "debt": 4 },
    { "inn": "jj4l5ld6hf", "user": "Petrov", "debt": 0 },
    { "inn": "grgr45d53h", "user": "Lobanov", "debt": 0 },
    { "inn": "g8dfgh5d53", "user": "Sidorov", "debt": 164 },
    { "inn": "j453g84453", "user": "OOO MMM", "debt": 54444 },
    { "inn": "mn8h445d53", "user": "bank", "debt": 2544 },
    { "inn": "g8445d53sf", "user": "ItGid", "debt": 44 }
];

console.log(clients);
let d = clients.filter(item => (item.debt >= 10)).sort((a, b) => (b.debt - a.debt));
console.table(d);