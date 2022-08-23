class User {
    constructor(name) {
        this.name = name;

    }
    static getRole() {
        /*реализация*/
        return 'student';
    }

};

const person = new User('Ivan');
console.log(person);
console.log(User.getRole());