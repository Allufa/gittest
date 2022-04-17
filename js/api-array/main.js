let pogoda;

fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=c9ae16f47ae9d59e72b079db780c6e29')
    .then(function(resp) { return resp.json() }) //Convert data to json
    .then(function(data) {
        console.log(data);
        console.log(data.name);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp - 273)}&deg`;
        document.querySelector('.sky').textContent = data.weather[0].icon;

    })
    .catch(function() {
        //catch any errors
        console.log('error');
    })