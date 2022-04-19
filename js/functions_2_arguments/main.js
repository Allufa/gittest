//function declaration
summ();

console.log('timeout 1' + setTimeout(100000, unixtime()));

function summ() {
    const x = 5;
    const y = 10;
    console.log(x + y);

    function t2() {
        console.log('t2');
    };
    t2();

}

summ();

//t2(); - не видно, тк она в видна только в рамках фугкции

function unixtime() {
    let time = Math.floor(new Date().getTime());
    console.log(time);

}
unixtime();

console.log('timeout 2' + setTimeout(200000, unixtime()));
console.log(setTimeout);