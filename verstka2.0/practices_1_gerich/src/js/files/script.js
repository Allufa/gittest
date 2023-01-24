// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";

window.addEventListener("load", function(e) {
    const bg = this.document.querySelectorAll('[data-bg]')

    if (bg.length) {
        bg.forEach(bgitem => {
            bgitem.insertAdjacentHTML('beforeend', `<div class="bg-item"></div>`)
        })
    }

});