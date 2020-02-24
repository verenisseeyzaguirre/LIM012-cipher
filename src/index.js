import cipher from './cipher.js';

// console.log(cipher);
let string;
let offset;
let usuario;
let retorno;

// funciones arrow ejm: const square = num => num * num;
const ocultarEntrada = () => {
  document.getElementById('botones').style.display = 'none';
};
const mostrarEntrada = () => {
  document.getElementById('botones').style.display = 'block';
};
const mostrarEnviado = () => {
  document.getElementById('enviado').style.display = 'block';
};
const mostrarLogIn = () => {
  document.getElementById('login').style.display = 'block';
};
const ocultarResultado = () => {
  document.getElementById('resultado').style.display = 'none';
};
const ocultarEnviado = () => {
  document.getElementById('enviado').style.display = 'none';
};
const ocultarError = () => {
  document.getElementById('error').style.display = 'none';
};
const limpiarEjercicio = () => {
// sirve para borrar los datos ingresados y almacenados anteriormente
  document.getElementById('entrada').value = '';
  document.getElementById('saltos').value = '';
};
const imprimiendoMensaje = (nuevoMensaje) => {
  const mensajeResuelto = document.getElementById('pantalla');
  mensajeResuelto.innerHTML = nuevoMensaje;
  document.getElementById('resultado').style.display = 'block';
};
const ingresaUsuario = () => {
  usuario = document.getElementById('user').value;
  if (usuario === '123456') {
    document.getElementById('botones').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    // botonIngresar.addEventListener('click',mostrarEntrada);
    // botonIngresar.addEventListener('click',ocultarLogIn);
  } else {
    document.getElementById('login').style.display = 'none';
    document.getElementById('error').style.display = 'block';
  }
};
// buscando unir capturarDatosA y capturarDatosB , A es 65 y Z a 90
const capturarDatosA = () => {
  string = document.getElementById('entrada').value;
  offset = parseInt(document.getElementById('saltos').value, 0);
  if (offset === '' || offset === 0 || string.length !== 0 || string.length === 0) {
    document.getElementById('user').value = '';
    document.getElementById('error').style.display = 'block';
    limpiarEjercicio();
  } else {
    retorno = cipher.encode(offset, string);
    imprimiendoMensaje(retorno);
  }
};
const capturarDatosB = () => {
  string = document.getElementById('entrada').value;
  offset = parseInt(document.getElementById('saltos').value, 0);
  if (offset === '' || offset === 0 || string.length !== 0 || string.length === 0) {
    document.getElementById('user').value = '';
    document.getElementById('error').style.display = 'block';
    limpiarEjercicio();
  } else {
    retorno = cipher.decode(offset, string);
    imprimiendoMensaje(retorno);
  }
};
// a
const botonIngresar = document.getElementById('btnIngresar');
botonIngresar.addEventListener('click', ingresaUsuario);
// botonIngresar.addEventListener('click', mostrarEntrada);
// botonIngresar.addEventListener('click', ocultarLogIn);
// ejecuta las funciones , oculta la primera pantalla y muestra el resultado cifrado
const botonCifrar = document.getElementById('btnCifrar');
botonCifrar.addEventListener('click', ocultarEntrada);
botonCifrar.addEventListener('click', capturarDatosA);
//  ejecuta las funciones, oculta la primera pantalla y muestra el resultado descifrado
const botonDescifrar = document.getElementById('btnDescifrar');
botonDescifrar.addEventListener('click', ocultarEntrada);
botonDescifrar.addEventListener('click', capturarDatosB);
// oculta los resultados muestra la primera pantalla limpia los datos anteriores
const botonVolverIntentar1 = document.getElementById('btnVolverIntentar1');
botonVolverIntentar1.addEventListener('click', ocultarResultado);
botonVolverIntentar1.addEventListener('click', mostrarEntrada);
botonVolverIntentar1.addEventListener('click', limpiarEjercicio);
// oculta los resultados muestra la primera pantalla limpia los datos anteriores
const botonVolverIntentar2 = document.getElementById('btnVolverIntentar2');
botonVolverIntentar2.addEventListener('click', ocultarEnviado);
botonVolverIntentar2.addEventListener('click', mostrarEntrada);
botonVolverIntentar2.addEventListener('click', limpiarEjercicio);
// llama al boton Volver a intentar, despues de la pantalla ERROR
const botonVolverIntentar3 = document.getElementById('btnVolverIntentar3');
botonVolverIntentar3.addEventListener('click', mostrarLogIn);
botonVolverIntentar3.addEventListener('click', ocultarError);
// llama al boton ENVIAR, oculta X y muestra imagen de enviado
const botonEnviar = document.getElementById('btnEnviar');
botonEnviar.addEventListener('click', ocultarResultado);
botonEnviar.addEventListener('click', mostrarEnviado);
