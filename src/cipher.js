let mensaje;
let letra;
let texto='';

const cipher = {
  encode(offset, string){
  for(var i = 0; i < string.length; i+=1){
    letra = String.fromCharCode((string.charCodeAt(i)-65+offset)%26 + 65);
    texto = texto+letra;
    } 
    mensaje = texto;
    texto='';
    return(mensaje);
},
  decode(offset, string){
  for(var i = 0; i < string.length; i+=1){
    //letra = String.fromCharCode(string.charCodeAt(i)-(offset)%26);
    letra = String.fromCharCode( string.charCodeAt(i)-(string.charCodeAt(i)-65+offset)%26);
    texto = texto+letra;
    } 
    mensaje = texto;
    texto='';
    return(mensaje);
}
};export default cipher;