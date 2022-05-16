const user = {
    age: 24,
    password: 'ицукfffен123',
    agreeToTerm: true
};
const user0 = {
    age: 54,
    password: 'ицукfffен123',
    agreeToTerm: false
};


function checkAge(user) {
    return user.age > 18;
};
console.log(checkAge(user));

function checkPassword(user) {
    return user.password.length >= 8;
};
console.log(checkPassword(user));

function checkTerms(user) {
    return user.agreeToTerm === true;
};

console.log(checkTerms(user));


function validate(obj, ...tests) {
    for (i = 0; i < tests.length; i++) {
        if (tests[i](obj) === false) return false;

    };
    return true;
}
console.log(`validate   ${validate(user,checkAge,checkPassword,checkTerms)}`);


function createValidator(...tests) {

    return function(obj) {
        for (let i = 0; i < tests.length; i++) {
            if (tests[i](obj) === false) return false;
        }
        return true;
    }
}


valid1 = createValidator(checkAge, checkPassword, checkTerms);
valid2 = createValidator(checkAge, checkPassword);


console.log(valid1(user0));
console.log(valid2(user0));