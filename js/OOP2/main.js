let user = {
    username: 'Ivan',
    _password: 'qwerty',
    set password(pass) {
        this._password = pass.trim();
    },
    get password() {
        return this._password;
    }

}


user.password = ' Hello ';


// let user2 = {
//     username: 'Ivan',
//     password: 'qwerty'
// }



let user2 = {};
user2.__proto__ = user;
user2.photo = 'ivan.jpeg';
user2.password = '   123   ';
user2.username = 'Privet';


console.log(user);
console.log(user.password);
console.log(user._password);
console.log(user2.username);
console.log(user2.__proto__.username);
console.log(user == user2);
console.log(user2.photo);