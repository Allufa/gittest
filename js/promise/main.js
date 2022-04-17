let a = new Promise((resolve, reject) => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lon=54.7387&lat=55.97206&appid=c9ae16f47ae9d59e72b079db780c6e29')
        .then(data => {
            console.log('answer');
            console.log(data);

            // console.log(data.ok);
            // console.log(data.status);

            //   data.text().then(data2 => {
            //       console.log(JSON.parse(data2));
            //   })
            resolve(data.text())
        })
});


let b = new Promise((resolve, reject) => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lon=50.7387&lat=50.97206&appid=c9ae16f47ae9d59e72b079db780c6e29')
        .then(data => {
            console.log('answer2');
            console.log(data);

            // console.log(data.ok);
            // console.log(data.status);

            //   data.text().then(data2 => {
            //       console.log(JSON.parse(data2));
            //   })
            resolve(data.text())
        })
});


Promise.all([a, b]).then(value => { // ждет 2 события и потом делает.
    console.log(value);
    console.log(value[0]);
    console.log(value[1]);

})

// a.then(data => {
//     console.log('111' + data);
// })


// b.then(data => {
//     console.log('222' + data);
// })



// fetch('https://api.openweathermap.org/data/2.5/weather?lon=54.7387&lat=55.97206&appid=c9ae16f47ae9d59e72b079db780c6e29')
//         .then(data => {
//             console.log('answer');
//             console.log(data);

//             // console.log(data.ok);
//             // console.log(data.status);

//             //   data.text().then(data2 => {
//             //       console.log(JSON.parse(data2));
//             //   })
//             return data.text()
//         })
//         .then(data => {
//                 console.log(data);
//             }

//         );