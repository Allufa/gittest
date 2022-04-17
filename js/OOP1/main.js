function myAlert(a, c, d) {
    let b = `<p class="${c}">${a}</p>`
    document.querySelector(d).innerHTML = b;

};

myAlert('Hi', 'red', '.test');
myAlert('PRIVET', 'orange', '.test2');
class Alert {
    constructor(a, c, d) {
        this.message = a;
        this.cssClass = c;
        this.out = d;
    }
    showAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`;
    }
    myAlert() {
        alert(this.message)
    }

};
class Alert2 extends Alert {
    constructor(a, c, d, icon) {
        super(a, c, d);
        this.icon = icon;

    }

    showIconAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}"><span class="material-icons">${this.icon}</span> ${this.message}</p>`;

    }
    myAlert() {
        alert('hi' + this.message)
    }




}
let m = new Alert('My message Alert1', 'red', '.test');
console.log(m);
m.showAlert();
let m2 = new Alert2('My message Alert2', 'red', '.test3', 'language');
m2.showIconAlert();
m2.myAlert(this.message);