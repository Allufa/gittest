document.querySelector('.block-1').addEventListener('touchstart', myTouch);
document.querySelector('.block-1').addEventListener('touchend', myTouchend);
document.querySelector('.block-2').addEventListener('touchmove', myTouchmove);

function myTouch(event) {
    console.log('touch');
    console.log(event);
    document.querySelector('.out-1').innerHTML += 'work';
    document.querySelector('.out-2').innerHTML = event.changedTouches[0].clientX;
    document.querySelector('.out-3').innerHTML = event.changedTouches[0].clientY;
};

function myTouchend(event) {
    console.log('end');
    document.querySelector('.out-4').innerHTML = event.changedTouches[0].clientY;

};

function myTouchmove(event) {
    console.log('move');
    console.log(event);
    document.querySelector('.out-5').innerHTML = event.changedTouches[0].clientX;
    document.querySelector('.out-6').innerHTML = event.changedTouches[0].clientY;
}