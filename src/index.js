import validator from './validator.js';

console.log(validator);

document.addEventListener('DOMContentLoaded', function (){ //No ejecuta codigo JS hasta que HTML cargue por completo.

    const creditNumber = document.querySelector("#creditNumber");
    const btn_validation = document.querySelector("#btn_validation");
    const parrafo = document.querySelector("#parrafo");

    btn_validation.addEventListener("click", function (event) { //Obtiene el numero de la tarjeta.
        event.preventDefault();
        parrafo.innerHTML = "";
        if (creditNumber.value == "") {
            parrafo.innerHTML = "Por favor, ingrese un número valido"
        }else {
            console.log(creditNumber.value); //esto es un string
            parrafo.innerHTML = "Número de Tarjeta: " + creditNumber.value;
        }
    });

    creditNumber.addEventListener('keydown', (event) => { //detecta solo numeros al teclear
        let keyValue = event.key;
        //const regex = new RegExp(/^[0-9]*$/);
        const regex = new RegExp(/^[0-9]+$/);
        let test = regex.test(keyValue);
        console.log(keyValue);
        console.log(regex.test(keyValue));
        
        if (keyValue === 'Backspace'){ //Ya puedo borrar!! :DD
            test = true;
        }
        if (!test) {
            event.preventDefault();
        } 
    });

});

//const arrayNumbers = [1,2,3,4,5,6,7,8,9,0];
/*arrayNumbers.forEach(function(i){
            if(i == keyValue) {
                if (regex.test(keyValue)){
            creditNumber.value += keyValue;
            }
            } 
        });
        */

