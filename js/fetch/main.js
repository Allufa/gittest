function weather(lon, lat) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lon=' + lon + '&lat=' + lat + '&appid=c9ae16f47ae9d59e72b079db780c6e29')
        .then(data => {
            // console.log(data);
            // console.log(data.ok);
            // console.log(data.status);

            //   data.text().then(data2 => {
            //       console.log(JSON.parse(data2));
            //   })
            return data.text()
        })
        .then(data => {
                console.log(data);
            }

        );
};


let button = document.querySelector('button');


button.onclick = () => {
    let lon = document.querySelector('.lon').value;
    let lat = document.querySelector('.lat').value;
    console.log(lon);
    console.log(lat);

    weather(lon, lat);
}







// fetch('https://api.openweathermap.org/data/2.5/weather?lon=54.73876&lat=55.97206&appid=c9ae16f47ae9d59e72b079db780c6e29', {
//         method: 'GET', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             //'Content-Type': 'application/json'
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *client
//         //body: 'lon=54.73876&lat=55.97206&appid=c9ae16f47ae9d59e72b079db780c6e29' //JSON.stringify(data)  body data type must match "Content-Type" header
//     })
//     .then(response => { return response.text() })
//     .then(response => console.log('2 запрос' + response))
//     // parses JSON response into native JavaScript objects