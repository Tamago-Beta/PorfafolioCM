import { mensajeForm } from "./formulario.js";
import { activarMenu, ocultarMenuClick } from "./barrasMenu.js";
import { validarInputs } from "./validaciones.js";
import { scrollMenuActive } from "./scrollActive.js";


document.addEventListener('DOMContentLoaded', ()=>{
    activarMenu();
    ocultarMenuClick();
    mensajeForm();
    validarInputs();
    scrollMenuActive();
})

// ============ SCRIPT LIBRERIA TYPED.JS ==========
const typed = new Typed('#typed', {
    strings: ['Desarrollador Front-End', 'Bachiller en Ing. Sistemas'],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 65,
    backDelay: 2500,
    loop: true
})

// ============ SCRIPT LIBRERIA TYPED.JS ==========
const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 400,
})

sr.reveal('.titulo',{origin: 'bottom', delay: 0})
sr.reveal('.mensaje',{origin: 'bottom', delay: 300})

