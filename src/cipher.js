//alt+124 para simbolo de OR
let mensaje;
let letra;
let texto='';

// offset.length=0 | offset==0 | string.length==0 | string==0 
const cipher = {
  encode(offset, string){ 
      if( offset=='' | offset==0 | string.length==0 | string==0  ){
        throw 'TypeError';
      }
      for(var i = 0; i < string.length; i+=1){
          //console.log('entro'); throw 42 new TypeError() console.log('error')  throw(TypeError) throw 'ERROR2' throw(TypeError);
          letra = String.fromCharCode((string.charCodeAt(i)-65+offset)%26 + 65);
          texto = texto+letra;
          } 
          mensaje = texto;
          texto='';
          return(mensaje);

},
  decode(offset, string){
  for(var i = 0; i < string.length; i+=1){
    letra = String.fromCharCode((string.charCodeAt(i)-90-offset)%26 + 90);
    texto = texto+letra;
    } 
    mensaje = texto;
    texto='';
    return(mensaje);
  }
};export default cipher;