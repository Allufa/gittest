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


//объекты, прототипы, наследование
console.log('объекты, прототипы, наследование');
let a = {
    "text": 'Hello',
    "color": 'red',
    "show": function() {
        console.log(this.color);
    }
};

let b = {
    "fontsize": '24px',
    __proto__: a
};
console.log(b);
console.log(b.color);
b.show();


let c = {
    "fontFamily": 'Verdana',
    __proto__: b
};
console.log(c);
console.log(c.hasOwnProperty("color"));


console.log('example 3');
/*

*/
let user3 = {
    "login": '',
    "password": '',
    "validatePassword": function() {
        if (this.password.length > 6) { return true } else { return false };
    }
}

user3.password = 'hello123';
console.log(user3.validatePassword());

let user_profile = {
    "username": '',
    "photo": '',
    "age": 0,
    __proto__: user3

}

user_profile.age = 25;
user_profile.username = "Pupkin";
console.log(user_profile);