function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.ceil(rand);
};

let s1 = 0;

function moneyRecursion() {
    let m = randomInteger(0, 100);
    console.log('add: ' + m);
    s1 += m;
    console.log('sum: ' + s1);
    if (s1 >= 100) return;
    moneyRecursion();

}

//moneyRecursion();

const users = {
    "Ivanov": {
        age: 25,
        parent: {
            "Ivanov-a": {
                age: 45
            },
            "Ivanov-b": {
                age: 43,
                parent: {
                    "Sergeev-a": {
                        age: 46,
                        parent: {
                            "Lionenko": {
                                age: 67
                            }
                        }


                    }
                }
            }
        }
    },
    "Ivanov2": {
        age: 25,
        parent: {
            "Ivanov-a2": {
                age: 45
            },
            "Ivanov-b2": {
                age: 43,
                parent: {
                    "Sergeev-a2": {
                        age: 46,
                        parent: {
                            "Lionenko2": {
                                age: 67
                            }
                        }


                    }
                }
            }
        }
    },
};

function userParentRecursion(users) {
    if (users.parent !== undefined) {
        for (let key in users.parent) {
            console.log(key);
            userParentRecursion(users.parent[key]);
        }



    };

}

for (let key in users) {
    userParentRecursion(users[key]);
}



//прогресс рандомный



let progress = document.querySelector('progress');

function funprogress() {
    progress.value = Math.ceil(Math.random() * 100);
    console.log(progress.value);
    if (progress.value == 100) return;
    setTimeout(funprogress, 30);

}


funprogress();