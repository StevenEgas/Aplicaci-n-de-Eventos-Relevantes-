let numero_uno = "";

let numero_dos = "";

let operation = "";

function agregar_numero(arg) {
    console.log(arg);
    if (operation == "") {
        numero_uno += arg;
        let pantalla = document.getElementById('txt_pantalla');
        pantalla.value = numero_uno;
        console.log(pantalla);
    } else {
        numero_dos += arg;
        let pantalla = document.getElementById('txt_pantalla');
        pantalla.value = numero_dos;
        console.log(pantalla);
    }

}

function seleccionar_operacion(operacion) {
    console.log(operacion);
    if (operation == "") {
        operation = operacion;
    }
}

function calcular(arg) {
    let resultado = 0;
    if (operation == "+") {
        resultado = parseFloat(numero_uno) + parseFloat(numero_dos);
    } else if (operation == "-") {
        resultado = parseFloat(numero_uno) - parseFloat(numero_dos);
    } else if (operation == "*") {
        resultado = parseFloat(numero_uno) * parseFloat(numero_dos);
    } else if (operation == "/") {
        if (parseFloat(numero_dos) === 0) {
            resultado = "Error: División por 0";
        } else {
            resultado = parseFloat(numero_uno) / parseFloat(numero_dos);
        }
    }

    let pantalla = document.getElementById('txt_pantalla');
    pantalla.value = resultado;

}

function borrar() {
    numero_uno = "";
    numero_dos = "";
    operation = "";
    let pantalla = document.getElementById('txt_pantalla');
    pantalla.value = "";
}

function punto() {
    if (operation == "") {
        if (!numero_uno.includes(".")) {
            numero_uno += ".";
            let pantalla = document.getElementById('txt_pantalla');
            pantalla.value = numero_uno;
        }
    } else {
        if (!numero_dos.includes(".")) {
            numero_dos += ".";
            let pantalla = document.getElementById('txt_pantalla');
            pantalla.value = numero_dos;
        }
    }
}