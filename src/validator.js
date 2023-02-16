const validator = {
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
