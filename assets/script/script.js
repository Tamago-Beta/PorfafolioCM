import { handlesubmit } from "./formulario.js";
import { toggleMenu, linkAction } from "./barrasMenu.js";

// ==================== DECLARACION DE VARIALBES ====================
const barras = document.querySelector(".barras");
const contactameFormulario = document.querySelector('#form');
const navLink = document.querySelectorAll('.menu__link');

// ============================================================

barras.addEventListener('click', toggleMenu);
contactameFormulario.addEventListener('submit', handlesubmit)
navLink.forEach(n => n.addEventListener('click', linkAction));