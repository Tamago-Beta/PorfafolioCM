import { handlesubmit } from "./formulario.js";
import { toggleMenu, linkAction } from "./barrasMenu.js";
import { valida } from "./validaciones.js";

// ==================== DECLARACION DE VARIALBES ====================
const barras = document.querySelector(".barras");
const contactameFormulario = document.querySelector('#form');
const navLink = document.querySelectorAll('.menu__link');
const entradas = document.querySelectorAll(".entrada__caja");


// ============================================================

barras.addEventListener('click', toggleMenu);
contactameFormulario.addEventListener('submit', handlesubmit)
navLink.forEach(n => n.addEventListener('click', linkAction));
entradas.forEach((entrada) => {
    entrada.addEventListener("blur", (entrada) => {
        valida(entrada.target);
    })
});


