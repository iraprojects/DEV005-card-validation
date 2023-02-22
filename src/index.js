import validator from "./validator.js";

//No ejecuta codigo JS hasta que HTML cargue por completo. ej Js comillas simples
document.addEventListener('DOMContentLoaded', function () {
  const creditNumber = document.querySelector('#creditNumber');
  const btn_validation = document.querySelector('#btn_validation');
  const p_creditNumber = document.querySelector('#p_credit-number');
  const p_numberValid = document.querySelector('#p_number-valid');
  const p_emptyInput = document.querySelector('#p_emptyInput');
  const showCard = document.querySelector('#showCard');

  //Obtiene el numero de la tarjeta.
  btn_validation.addEventListener('click', function () {
    p_creditNumber.innerHTML = '';
    p_numberValid.innerHTML = '';
    p_emptyInput.innerHTML = '';
    showCard.style.display = 'none';
    if (creditNumber.value === '') {
      p_emptyInput.innerHTML = 'Please, enter a card number';
    } else {
      showCard.style.display = 'block';
      p_creditNumber.innerHTML = validator.maskify(creditNumber.value);
      if (validator.isValid(creditNumber.value) === true) {
        p_numberValid.innerHTML = 'is Valid √';
        p_numberValid.style.background = 'linear-gradient(90deg, #1a8b17 14%, #74e386 100%)';
        showCard.style.background = 'linear-gradient(90deg, #335db5 14%, #00ff88 100%)';
      } else {
        p_numberValid.innerHTML = 'Not Valid ☓';
        p_numberValid.style.background = 'linear-gradient(90deg, #9f1e1e 14%, #e34864 100%)';
        showCard.style.background = 'linear-gradient(90deg, #bebebe 14%, #b5334a 100%)';
      }
    }
  });

  //detecta solo numeros al teclear
  creditNumber.addEventListener('keydown', (event) => {
    const keyValue = event.key;
    const regex = new RegExp(/^[0-9]+$/);
    let test = regex.test(keyValue);
    //console.log(keyValue);
    if (keyValue === 'Backspace') {
      test = true;
    }
    if (!test) {
      event.preventDefault();
    }
    //console.log(test);
  });
});

//console.log(validator.maskify(creditNumber.value));
//console.log(creditNumber.value);
