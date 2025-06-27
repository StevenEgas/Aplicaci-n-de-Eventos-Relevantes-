function enviarValor(elemento) {
    const valor = elemento.getAttribute('data-valor');
    const display = document.getElementById('txt_caja_texto');
    display.value = display.value + valor;
}

function calcular() {
    const display = document.getElementById('txt_caja_texto');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
