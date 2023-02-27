import validator from "./validator.js";

const creditNumber = document.querySelector("#credit-Number");
const btn_validation = document.querySelector("#btn-validation");
const p_creditNumber = document.querySelector("#p_credit-number");
const p_numberValid = document.querySelector("#p_number-valid");
const p_emptyInput = document.querySelector("#p_emptyInput");
const showCard = document.querySelector("#show-Card");
let creditNumberValue = creditNumber.value.trim();

//Evalua si el campo esta vacio
function isEmpty(ccvalue) {
  if (ccvalue.length === 0) {
    p_emptyInput.textContent = "Please, enter a card number";
    return true;
  }
  p_emptyInput.textContent = "";
  return false;
}

//Llama a la funcion maskify y la muestra en pantalla
function showMaskify(ccvalue) {
  p_creditNumber.textContent = validator.maskify(ccvalue);
}

//Llama a la funcion isValid y muestra en pantalla
function showIsValid(ccvalue) {
  p_creditNumber.textContent = "";
  p_numberValid.textContent = "";
  showCard.style.display = "block";
  showMaskify(ccvalue);
  if (validator.isValid(ccvalue)) {
    p_numberValid.textContent = "is Valid √";
    p_numberValid.style.background =
      "linear-gradient(90deg, #1a8b17 14%, #74e386 100%)";
    showCard.style.background =
      "linear-gradient(90deg, #335db5 14%, #00ff88 100%)";
  } else {
    p_numberValid.textContent = "Not Valid ☓";
    p_numberValid.style.background =
      "linear-gradient(90deg, #9f1e1e 14%, #e34864 100%)";
    showCard.style.background =
      "linear-gradient(90deg, #bebebe 14%, #b5334a 100%)";
  }
}

//Evento botón que manda a llamar otras funciones

btn_validation.addEventListener("click", () => {
  creditNumberValue = creditNumber.value.trim();
  if (!isEmpty(creditNumberValue)) {
    showIsValid(creditNumberValue);
  } else {
    showCard.style.display = "none";
  }
});

//Evento que solo acepta numeros al teclear
const validKeys = ["Backspace", "ArrowRight", "ArrowLeft", "Home", "End"];
creditNumber.addEventListener("keydown", (event) => {
  const keyValue = event.key;
  const regex = new RegExp(/^[0-9]+$/);
  let test = regex.test(keyValue);
  //console.log(keyValue);
  if (validKeys.includes(keyValue)) {
    test = true;
  }
  if (!test) {
    event.preventDefault();
  }
  //console.log(test);
});
