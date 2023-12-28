let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log('complete');
        myFunction(this.responseText);
    }
}
xhttp.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lon=54.73876&lat=55.97206&appid=c9ae16f47ae9d59e72b079db780c6e29')
xhttp.send();

function myFunction(data) {
    console.log(JSON.parse(data));
}

// xhttp2 = new XMLHttpRequest;
// xhttp2.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         myFunction2(this.responseText)
//     }
// }
// xhttp2.open('POST', 'http://getpost.itgid.info/index2.php');
// xhttp2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
// xhttp2.send('auth=zhrgB3DxC8LoG7Gcilzg&action=1');

// function myFunction2(data) {
//     console.log(data);

// }