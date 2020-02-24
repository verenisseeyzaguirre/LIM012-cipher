const cipher = {
  encode: (offset, string) => {
    let letra;
    let mensaje = '';
    if (offset === '' || offset === 0 || string.length === 0 || string === 0 || string === ' ') {
      throw new TypeError();
    }
    for (let i = 0; i < string.length; i += 1) {
      const caracter = string.charCodeAt(i);
      if ((caracter >= 32 && caracter <= 64) || (caracter >= 91 && caracter <= 96)
       || caracter >= 123) mensaje += String.fromCharCode(caracter);
      else if (caracter >= 65 && caracter <= 90) {
        letra = String.fromCharCode(((caracter - 65 + offset) % 26) + 65);
        mensaje += letra;
      } else if (caracter >= 97 && caracter <= 122) {
        letra = String.fromCharCode(((caracter - 97 + offset) % 26) + 97);
        mensaje += letra;
      }
    }
    return mensaje;
  },
  decode: (offset, string) => {
    let letra;
    let mensaje = '';
    if (offset === '' || offset === 0 || string.length === 0 || string === 0 || string === ' ') {
      throw new TypeError();
    }
    for (let i = 0; i < string.length; i += 1) {
      const caracter = string.charCodeAt(i);
      if ((caracter >= 32 && caracter <= 64) || (caracter >= 91 && caracter <= 96)
      || caracter >= 123) mensaje += String.fromCharCode(caracter);
      else if (caracter >= 65 && caracter <= 90) {
        letra = String.fromCharCode(((caracter - 90 - offset) % 26) + 90);
        mensaje += letra;
      } else if (caracter >= 97 && caracter <= 122) {
        letra = String.fromCharCode(((caracter - 122 - offset) % 26) + 122);
        mensaje += letra;
      }
    }
    return (mensaje);
  },
};
export default cipher;
