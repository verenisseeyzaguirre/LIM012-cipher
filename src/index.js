import cipher from './cipher.js';

// console.log(cipher);
let string;
let offset;
let usuario;
let retorno;

const removerClasePorid = (id, clase) => {
  document.getElementById(id).classList.remove(clase);
};
const agregarClasePorId = (id, clase) => {
  document.getElementById(id).classList.add(clase);
};
const limpiarInputPorId = (id) => {
  document.getElementById(id).value = '';
};
const imprimiendoMensaje = (nuevoMensaje) => {
  const mensajeResuelto = document.getElementById('pantalla');
  mensajeResuelto.innerHTML = nuevoMensaje;
  removerClasePorid('resultado', 'hide');
};
const ingresaUsuario = () => {
  usuario = document.getElementById('user').value;
  if (usuario === '123456') {
    agregarClasePorId('login', 'hide');
    removerClasePorid('botones', 'hide');
  } else {
    agregarClasePorId('login', 'hide');
    removerClasePorid('error', 'hide');
  }
};
// Ejecuta la funcion cifrar/descifrar
const capturarDatos = (boton) => {
  string = document.getElementById('entrada').value;
  offset = parseInt(document.getElementById('saltos').value, 0);
  if (offset === '' || offset === 0 || string.length === 0) {
    limpiarInputPorId('user');
    removerClasePorid('error', 'hide');
    limpiarInputPorId('entrada');
    limpiarInputPorId('saltos');
  } else if (boton === 'btnCifrar') {
    retorno = cipher.encode(offset, string);
    imprimiendoMensaje(retorno);
  } else if (boton === 'btnDescifrar') {
    retorno = cipher.decode(offset, string);
    imprimiendoMensaje(retorno);
  }
};
const metodos = (eventCifrado) => {
  agregarClasePorId('botones', 'hide');
  capturarDatos(eventCifrado.target.id);
};
// Dependiendo de donde se ejecuta un error, les redirige a una pagina para volver a intentar
const volverIntentar = (eventVolverIntentar) => {
  if (eventVolverIntentar.target.id === 'btnVolverIntentar3') {
    removerClasePorid('login', 'hide');
    agregarClasePorId('error', 'hide');
  } else {
    removerClasePorid('botones', 'hide');
    limpiarInputPorId('entrada');
    limpiarInputPorId('saltos');
    if (eventVolverIntentar.target.id === 'btnVolverIntentar1') {
      agregarClasePorId('resultado', 'hide');
    } else {
      agregarClasePorId('enviado', 'hide');
    }
  }
};
// funciones arrow ejm: const square = num => num * num;
const enviar = () => {
  agregarClasePorId('resultado', 'hide');
  removerClasePorid('enviado', 'hide');
};
// De ingresar el usuario correcto, ingresara a la sgte pantalla, si no saldr[a error]
const botonIngresar = document.getElementById('btnIngresar');
botonIngresar.addEventListener('click', ingresaUsuario);
// ejecuta las funciones , oculta la primera pantalla y muestra el resultado cifrado / descifrado
const botonCifrar = document.getElementById('btnCifrar');
botonCifrar.addEventListener('click', metodos);
const botonDescifrar = document.getElementById('btnDescifrar');
botonDescifrar.addEventListener('click', metodos);
// oculta los resultados muestra la primera pantalla limpia los datos anteriores
const botonVolverIntentar1 = document.getElementById('btnVolverIntentar1');
botonVolverIntentar1.addEventListener('click', volverIntentar);
const botonVolverIntentar2 = document.getElementById('btnVolverIntentar2');
botonVolverIntentar2.addEventListener('click', volverIntentar);
// llama al boton Volver a intentar, despues de la pantalla ERROR
const botonVolverIntentar3 = document.getElementById('btnVolverIntentar3');
botonVolverIntentar3.addEventListener('click', volverIntentar);
// llama al boton ENVIAR, oculta X y muestra imagen de enviado
const botonEnviar = document.getElementById('btnEnviar');
botonEnviar.addEventListener('click', enviar);
