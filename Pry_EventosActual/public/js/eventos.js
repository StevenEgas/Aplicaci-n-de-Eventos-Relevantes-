function verificar_nombre(arg) {
  let salida = document.getElementById("estado_nombre");
  if (arg.value.trim().length >= 4) {
    salida.innerHTML = "Nombre válido";
    salida.className = "bg-success p-1";
  } else {
    salida.innerHTML = "Nombre muy corto";
    salida.className = "bg-danger p-1";
  }
}

function verificar_email(arg) {
  let salida = document.getElementById("estado_email");
  if (arg.value.includes("@") && arg.value.includes(".")) {
    salida.innerHTML = "Correo válido";
    salida.className = "bg-success p-1";
  } else {
    salida.innerHTML = "Correo inválido";
    salida.className = "bg-danger p-1";
  }
}

function verificar_numero(arg) {
  let salida = document.getElementById("estado_numero");
  if (arg.value > 0  &&  arg.value< 100) {
    salida.innerHTML = "Edad válida";
    salida.className = "bg-success p-1";
  } else {
    salida.innerHTML = "Debe ser una edad valida";
    salida.className = "bg-danger p-1";
  }
}

function verificar_password(arg) {
  let salida = document.getElementById("estado_password");
  if (arg.value.length >= 6) {
    salida.innerHTML = "Contraseña segura";
    salida.className = "bg-success p-1";
  } else {
    salida.innerHTML = "Mínimo 6 caracteres";
    salida.className = "bg-danger p-1";
  }
}

function verificar_fecha(arg) {
  let salida = document.getElementById("estado_fecha");
  if (arg.value !== "") {
    salida.innerHTML = "Fecha seleccionada";
    salida.className = "bg-success p-1";
  } else {
    salida.innerHTML = "Seleccione una fecha";
    salida.className = "bg-warning p-1";
  }
}

function verificar_hora(arg) {
  let salida = document.getElementById("estado_hora");
  let hora = Number(arg.value.split(":")[0]);
  if (arg.value === "") {
    salida.innerHTML = "Ingrese la hora";
    salida.className = "bg-danger p-1";
  } else if (hora < 12) {
    salida.innerHTML = "Horario Matutino";
    salida.className = "bg-success p-1";
  } else if (hora < 18) {
    salida.innerHTML = "Horario Vespertino";
    salida.className = "bg-warning p-1";
  } else {
    salida.innerHTML = "Horario Nocturno";
    salida.className = "bg-primary p-1";
  }
}

function verificar_archivo(arg) {
  let salida = document.getElementById("estado_archivo");
  if (arg.files.length > 0) {
    salida.innerHTML = `Archivo seleccionado: ${arg.files[0].name}`;
    salida.className = "bg-success p-1";
  } else {
    salida.innerHTML = "No se ha seleccionado archivo";
    salida.className = "bg-danger p-1";
  }
}

function verificar_rango(arg) {
  let salida = document.getElementById("estado_rango");
  salida.innerHTML = `Peso Seleccionado: ${arg.value} kg`;
  salida.className = "bg-info p-1";
}

function verificar_color(arg) {
  let salida = document.getElementById("estado_color");
  salida.innerHTML = `Color seleccionado: ${arg.value}`;
  salida.className = "p-1";
  salida.style.backgroundColor = arg.value;
}

function verificar_telefono(arg) {
    let salida = document.getElementById("estado_telefono");
    // Solo permitir hasta 10 dígitos numéricos
    arg.value = arg.value.replace(/\D/g, '').slice(0, 10);
    if (arg.value.length === 10) {
        salida.innerHTML = "Teléfono válido";
        salida.className = "bg-success p-1";
    } else {
        salida.innerHTML = "Teléfono incompleto";
        salida.className = "bg-danger p-1";
    }
}

function verificar_url(arg) {
  let salida = document.getElementById("estado_url");
  if (arg.value.startsWith("https://") && arg.value.includes(".com")) {
    salida.innerHTML = "URL válida";
    salida.className = "bg-success p-1";
  } else {
    salida.innerHTML = "URL inválida";
    salida.className = "bg-danger p-1";
  }
}

function verificar_checkbox() {
    let checkboxes = document.querySelectorAll('#chk_deporte, #chk_musica, #chk_lectura, #chk_viajes, #chk_tecnologia');
    let salida = document.getElementById("estado_checkbox");
    let seleccionados = Array.from(checkboxes).filter(cb => cb.checked).length;
    if (seleccionados >= 2) {
        salida.innerHTML = "Al menos dos opciones seleccionadas";
        salida.className = "bg-success p-1";
    } else {
        salida.innerHTML = "Debe seleccionar al menos dos opciones";
        salida.className = "bg-danger p-1";
    }
}

function verificar_radio(arg) {
  let salida = document.getElementById("estado_radio");
  if (arg.checked) {
    salida.innerHTML = "Términos aceptados";
    salida.className = "bg-success p-1";
  } else {
    salida.innerHTML = "Debe aceptar los términos";
    salida.className = "bg-danger p-1";
  }
  }

function verificar_select(arg) {
  let salida = document.getElementById("estado_select");
  if (arg.value === "") {
    salida.innerHTML = "Seleccione una opción válida";
    salida.className = "bg-warning p-1";
  } else {
    salida.innerHTML = `Genero: ${arg.value}`;
    salida.className = "bg-success p-1";
  }
}

function verificar_comentario(arg) {
  let salida = document.getElementById("estado_comentario");
  if (arg.value.trim().length >= 10) {
    salida.innerHTML = "Biografia válida";
    salida.className = "bg-success p-1";
  } else {
    salida.innerHTML = "Biografia  muy corta, cuenta más sobre ti.";
    salida.className = "bg-danger p-1";
  }
}

function verificar_boton(arg) {
    let salida = document.getElementById("estado_radio");
    if (document.getElementById("radio_terminos")?.checked) {
        alert("¡Formulario enviado correctamente!");
    } else {
        alert("Debe aceptar los términos y condiciones para enviar el formulario.");
        // Opcional: mostrar el mensaje en la interfaz
        salida.innerHTML = "Debe aceptar los términos";
        salida.className = "bg-danger p-1";
    }
}

// Eventos secundarios para demostración
function log_evento(msg) {
  console.log(msg);
}
