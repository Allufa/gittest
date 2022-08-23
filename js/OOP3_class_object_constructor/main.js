// class -> function
//ab class - > class - > object

class User {
    //username
    //password
    constructor(username, password) {
        this.username = username;
        this.password = password;
    };
    validatePassword() {
        console.log(this.password.length);
        if (this.password.length > 6) { return true; } else { return false; };
    };
}

let a = 'Ivan';
let b = '777sss6666';

const person = new User(a, b);
console.log(person);
console.log(person.validatePassword());