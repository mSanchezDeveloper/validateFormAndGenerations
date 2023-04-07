import {
    campoRequerido,
    cantidadCaracteres,
    validarAltura,
    validarAnio,
    validarDNI,
    validarNumeros,
    validarPeso,
  } from "./validaciones.js";
  import Persona from "./personaClass.js";
  
  let nombre = document.getElementById("nombre");
  let edad = document.getElementById("edad");
  let dni = document.getElementById("dni");
  let genero = document.getElementById("genero");
  let peso = document.getElementById("peso");
  let altura = document.getElementById("altura");
  let anio = document.getElementById("fechaNacimiento");
  let formulario = document.getElementById("formGeneraciones");
  let alert = document.querySelector("#msjError");
  let btnmostrarDatos = document.querySelector("#mostrarDatos");
  let btnmostrarGeneracion = document.querySelector("#mostrarGeneracion");
  
  nombre.addEventListener("blur", () => {
    cantidadCaracteres(2, 40, nombre);
  });
  edad.addEventListener("blur", () => {
    validarNumeros(edad);
  });
  dni.addEventListener("blur", () => {
    validarDNI(dni);
  });
  genero.addEventListener("change", () => {
    campoRequerido(genero);
  });
  peso.addEventListener("blur", () => validarPeso(peso));
  altura.addEventListener("blur", () => validarAltura(altura));
  anio.addEventListener("keyup", () => validarAnio(anio));
  anio.addEventListener("blur", () => validarAnio(anio));
  formulario.addEventListener("submit", crearPersona);
  
  function crearPersona(e) {
    e.preventDefault();
    // console.log(e);
    if (
      cantidadCaracteres(2, 40, nombre) &&
      validarNumeros(edad) &&
      validarDNI(dni) &&
      validarAnio(anio)
    ) {
      console.log("tengo que crear la persona");
      //hay que ocultar el alert
      alert.className = "alert alert-danger mt-3 d-none";
      const nuevaPersona = new Persona(
        nombre.value,
        edad.value,
        dni.value,
        genero.value,
        peso.value,
        altura.value,
        anio.value
      );
      //reseteo los datos del formulario y los detalles
      resetearDatos();
      // mostramos opciones para la persona creada
      let datosExtras = document.querySelector("#datosExtras");
      datosExtras.className = "container bg-light my-4 rounded-3";
      // agregar el nombre de la persona en la seccion de detalle
      datosExtras.children[0].children[0].innerHTML = `<i class="bi bi-person-badge"></i> Persona: ${nuevaPersona.mostrarNombre}`;
      // opciones para agregar un manejador de eventos en un boton
      btnmostrarDatos.addEventListener("click", () =>
        mostrarDatosPersona(nuevaPersona)
      );
      btnmostrarGeneracion.addEventListener("click", () => {
        let panelDatos = document.querySelector("#detalle");
        panelDatos.innerHTML = nuevaPersona.mostrarGeneracion();
      });
    } else {
      console.log(
        "mostrar un mensaje de error, para que complete los datos correctamente"
      );
      alert.innerHTML = "Debe completar los datos indicados con *";
      alert.className = "alert alert-danger mt-3";
      setTimeout(() => {
        alert.className = "alert alert-danger mt-3 d-none";
      }, 5000);
    }
  }
  
  function resetearDatos() {
    formGeneraciones.reset();
    document.querySelector("#detalle").innerHTML = "";
    //quitar la clase validate a los input
    for (let input = 0; input <= 6; input++)
      formGeneraciones.children[input].children[1].className = "form-control";
  }
  
  function mostrarDatosPersona(persona) {
    let panelDatos = document.querySelector("#detalle");
    panelDatos.innerHTML = persona.mostrarDatos();
  }