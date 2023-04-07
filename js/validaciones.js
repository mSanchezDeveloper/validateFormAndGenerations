export function campoRequerido(input) {
  if (input.value.trim().length > 0) {
    console.log("El dato esta correcto");
    input.className = "form-control is-valid";
  } else {
    input.className += " is-invalid";
    let inputInvalid = document.querySelector("#validarGenero");
    console.log(inputInvalid);
    inputInvalid.innerHTML = "Por favor elije una opción.";
    console.log("Datos Invalidos")
  }
}

export function cantidadCaracteres(min, max, input) {
  if (input.value.trim().length >= min && input.value.trim().length <= max) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className += " is-invalid";
    console.log("Datos Invalidos")
    let inputInvalid = document.querySelector('.invalid-feedback');
    console.log(inputInvalid);
    inputInvalid.innerHTML = "No puedes dejar el campo vacio.";
    return false;
  }
}

export function validarNumeros(input) {
  //Validar con expresiones regulares
  let patron = /^[0-9]{1,2}$/;
  
  if (patron.test(input.value.trim())) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className += " is-invalid";
    let inputInvalid = document.querySelector("#validarEdad");
    console.log(inputInvalid);
    inputInvalid.innerHTML = "Ingresa una edad valida entre 18 y 99 años.";
    console.log("Datos Invalidos")
    return false;
  }
}


export function validarDNI(input) {
  let patron = /^[\d]{1,2}[\d]{3,3}[\d]{3,3}$/;
  if (patron.test(input.value.trim())) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className += " is-invalid";
    let inputInvalid = document.querySelector("#validarDNI");
    console.log(inputInvalid);
    inputInvalid.innerHTML = "Ingresa una DNI valido.";
    console.log("Datos Invalidos")
    return false;
  }
}

export function validarPeso(input) {
  let patron = /^[\d]{1,3}(\,[\d]{1,2})?$/;

  if (patron.test(input.value.trim())) {
    input.className = "form-control is-valid";
  } else {
    input.className += " is-invalid";
    let inputInvalid = document.querySelector("#validarPeso");
    console.log(inputInvalid);
    inputInvalid.innerHTML = "Ingresa tu peso en kilos ejem: 45,45.";
    console.log("Datos Invalidos")
  }
}

export function validarAltura(input) {
  let patron = /^[0-2]{1}(\,[\d]{1,2})?$/;
  if (patron.test(input.value.trim())) {
    input.className = "form-control is-valid";
  } else {
    input.className += " is-invalid";
    let inputInvalid = document.querySelector("#validarAltura");
    console.log(inputInvalid);
    inputInvalid.innerHTML = "Ingresa una altura valida.";
    console.log("Datos Invalidos")
  }
}

export function validarAnio(input) {
  let anioActual = new Date().getFullYear();
  console.log(anioActual);
  console.log(input.value);

  if (input.value >= 1930 && input.value <= anioActual) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className += " is-invalid";
    let inputInvalid = document.querySelector("#validarNacimiento");
    console.log(inputInvalid);
    inputInvalid.innerHTML = "Ingresa una año no menor a 1930.";
    console.log("Datos Invalidos")
    return false;
  }
}