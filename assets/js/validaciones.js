export function validarInputs() {
    const entradas = document.querySelectorAll(".entrada__caja");
    entradas.forEach((entrada) => {
        entrada.addEventListener("blur", (entrada) => {
            valida(entrada.target);
        })
    });
}

function valida(entrada) {
    const tipoDeEntrada = entrada.dataset.tipo;
    
    if (entrada.validity.valid) {
        entrada.parentElement.classList.remove("entrada--invalida");
        entrada.parentElement.querySelector(".entrada__mensaje").innerHTML = "";
    }else {
        entrada.parentElement.classList.add("entrada--invalida");
        entrada.parentElement.querySelector(".entrada__mensaje").innerHTML =
        mostrarMensajeDeError(tipoDeEntrada, entrada);
    }
}

function mostrarMensajeDeError(tipoDeEntrada, entrada) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (entrada.validity[error]) {
            mensaje = mensajesDeError[tipoDeEntrada][error];
        }
    });
    return mensaje;
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch"
];

const mensajesDeError = {
    name: {
        valueMissing: "Campo vacío",
    },
    email: {
        valueMissing: "Campo vacío",
        typeMismatch: "El correo no es válido",
    },
    subject: {
        valueMissing: "Campo vacío",
    },
    message: {
        valueMissing: "Campo vacío",
    }
}