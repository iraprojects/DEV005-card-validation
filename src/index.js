import validator from "./validator.js";

//No ejecuta codigo JS hasta que HTML cargue por completo. ej Js comillas simples
document.addEventListener("DOMContentLoaded", function () {
  const creditNumber = document.querySelector('#creditNumber');
  const btn_validation = document.querySelector('#btn_validation');
  const parrafo = document.querySelector('#parrafo');

  //Obtiene el numero de la tarjeta.
  btn_validation.addEventListener('click', function (event) {
    event.preventDefault();
    parrafo.innerHTML = "";
    if (creditNumber.value === "") {
      parrafo.innerHTML = "Por favor, ingrese un número valido";
    } else {
      //console.log(validator.maskify(creditNumber.value));
      //console.log(creditNumber.value);
      parrafo.innerHTML =
        "Número de Tarjeta: " + validator.maskify(creditNumber.value);
        validator.isValid(creditNumber.value);
    }
  });

  //detecta solo numeros al teclear
  creditNumber.addEventListener('keydown', (event) => {
    const keyValue = event.key;
    const regex = new RegExp(/^[0-9]+$/);
    let test = regex.test(keyValue);
    //console.log(keyValue);
    if (keyValue === "Backspace") {
      test = true;
    }
    if (!test) {
      event.preventDefault();
    }
    //console.log(test);
  });
});
