const validator = {
  isValid: function (creditNumber) {
    /*
    [X] Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]); 
    [X] a todos los números que ocupan una posición par se les debe multiplicar por dos, 
    [X] si este número es mayor o igual a 10, debemos sumar los dígitos del resultado; 
    [X] el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.
    [X] Optimizar Código
    */
    let creditNumberInvert = "";
    let creditNumberFinal = "";
    let totalSum = 0;
    let stringConvert = "";
    let multiple = 0;
    for (let i = creditNumber.length - 1; i >= 0; i--) {
      creditNumberInvert += creditNumber[i];
    }
    for (let i = 0; i <= creditNumberInvert.length - 1; i++) {
      if (i % 2 === 1) {
        multiple = Number(creditNumberInvert[i] * 2);
        if (multiple >= 10) {
          stringConvert = multiple.toString();
          creditNumberFinal +=
            Number(stringConvert[0]) + Number(stringConvert[1]);
          totalSum += Number(creditNumberFinal[i]);
        } else {
          creditNumberFinal += multiple;
          totalSum += Number(creditNumberFinal[i]);
        }
      } else {
        creditNumberFinal += creditNumberInvert[i];
        totalSum += Number(creditNumberFinal[i]);
      }
    }
    if (totalSum % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify: function (creditNumber) {
    let creditNumberMaskify = "";
    for (let i = 0; i < creditNumber.length; i++) {
      if (i < creditNumber.length - 4) {
        creditNumberMaskify += "#";
      } else {
        creditNumberMaskify += creditNumber[i];
      }
    }
    return creditNumberMaskify;
  },
  /*
  showBank: function (creditNumber) {
    
    const inventory = [
    { name: "JCB", quantity: 1800 },
    { name: "Diner's Club", quantity: 2014 },
    { name: "American Express", quantity: 34 },
    { name: "JCB", quantity: 305 },
    ];
    //sacar los primeros cuatro numeros
    //convertirlos a number
    const numbers = "34564365676434244242"
    const a = (numbers.slice(0,4))
    const two = Number(a.slice(0,-2)) //corta dos ultimos elementos
    const tw2 = Number(a.slice(0,-1)) //corta ultimo elemento
    const result = inventory.find(({ quantity }) => quantity === Number(a.slice(0,-2)));
    //console.log(result.name);
    //console.log(a)
    //console.log(two)
    //console.log(tw2)
    //console.log(fournumber.includes(305));
    if(result == undefined){
      console.log("Fallo")
    }else{
      console.log(result.name)
    }
    
  },*/
};
export default validator;
