const barrasMenu = () =>{
    var line1__bars = document.querySelector(".barras__linea1");
    var line2__bars = document.querySelector(".barras__linea2");
    var line3__bars = document.querySelector(".barras__linea3");

    line1__bars.classList.toggle('barras__linea-1');
    line2__bars.classList.toggle('barras__linea-2');
    line3__bars.classList.toggle('barras__linea-3');
}

export function activarMenu() {
    const toggleMenu = () => {
        const menu = document.querySelector(".menu");
        menu.classList.toggle('menu--activo');
        barrasMenu();
    }
    const barras = document.querySelector(".barras");
    barras.addEventListener('click', toggleMenu);
} 
 

export function ocultarMenuClick() {
    const linkAction = () =>{
        const cabeceraMenu = document.querySelector('.menu');
        cabeceraMenu.classList.remove('menu--activo');
        barrasMenu();
    }
    const navLink = document.querySelectorAll('.menu__link');
    navLink.forEach(n => n.addEventListener('click', linkAction));
}
