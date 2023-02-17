const validator = {
  isValid: function (creditNumber) {
    /*
    [X] Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]); 
    [X] a todos los números que ocupan una posición par se les debe multiplicar por dos, 
    [X] si este número es mayor o igual a 10, debemos sumar los dígitos del resultado; 
    [] el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.
    */
    let creditNumberInvert = "";
    let creditNumberMul = "";
    let creditNumberPlus = "";
    let a = "";
    let b = 0;
    let c = 0;
    let sum = 0;
    for (let i = creditNumber.length - 1; i >= 0; i--) {
      creditNumberInvert += creditNumber[i];
    }
    for (let i = 0; i <= creditNumberInvert.length - 1; i++) {
      if (i % 2 === 1) {
        //creditNumberMul += creditNumberInvert[i] * 2;
        sum = Number(creditNumberInvert[i] * 2);
        if (sum >= 10) {
          a = sum.toString();
          b = Number(a[0]);
          c = Number(a[1]);
          console.log("suma: ", b + c);
          creditNumberMul += b + c;
          console.log(creditNumberMul[i])
        } else {
          creditNumberMul += sum;
        }
      } else {
        creditNumberMul += creditNumberInvert[i];
      }
    }
    console.log(creditNumberInvert);
    console.log(creditNumberMul);
  },

  maskify: function (creditNumber) {
    let creditNumberMaskify = "";
    const band = creditNumber.length - 4;
    //console.log(band);
    for (let i = 0; i < creditNumber.length; i++) {
      if (i < band) {
        creditNumberMaskify += "#";
      } else {
        creditNumberMaskify += creditNumber[i];
      }
    }
    /* for (let i = creditNumber.length -1; i >= 0; i--) {
      creditNumberMaskify += creditNumber[i];
    } */
    return creditNumberMaskify;
  },
};
export default validator;
