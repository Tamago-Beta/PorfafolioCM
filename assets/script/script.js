const barras = document.querySelector(".cabecera__barmenu");
const menu = document.querySelector(".cabecera__menu");

var line1__bars = document.querySelector(".cabecera__barmenu__line1");
var line2__bars = document.querySelector(".cabecera__barmenu__line2");
var line3__bars = document.querySelector(".cabecera__barmenu__line3"); 

barras.addEventListener("click", () =>{
    menu.classList.toggle('cabecera__menu--activo');

    line1__bars.classList.toggle('cabecera__barmenu__line-1');
    line2__bars.classList.toggle('cabecera__barmenu__line-2');
    line3__bars.classList.toggle('cabecera__barmenu__line-3');
})


