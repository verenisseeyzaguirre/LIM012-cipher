import cipher from './cipher.js';
//console.log(cipher);
let string;
let offset;

//funciones arrow ejm: const square = num => num * num;
const ocultarEntrada = () => {
    document.getElementById('botones').style.display = 'none';
    }

const mostrarEntrada = () => {
    document.getElementById('botones').style.display = 'block';
    }

const ocultarResultado = () => {
    document.getElementById('resultado').style.display = 'none';
    }
   
const limpiarEjercicio = () => {
    //sirve para borrar los datos ingresados y almacenados anteriormente
    document.getElementById('entrada').value= '';
    document.getElementById('saltos').value= '';
    }

//buscando unir capturarDatosA y capturarDatosB , A es 65 y Z a 90
    const capturarDatosA = () => {
      string = document.getElementById('entrada').value;
      offset = parseInt(document.getElementById('saltos').value);
      imprimiendoMensaje(cipher.encode(offset, string));
  }  

    const capturarDatosB = () => {
    string = document.getElementById('entrada').value;
    offset = parseInt(document.getElementById('saltos').value);
    imprimiendoMensaje(cipher.decode(offset, string));
} 

const imprimiendoMensaje = (nuevoMensaje) => {
    const mensajeResuelto = document.getElementById('pantalla');
    mensajeResuelto.innerHTML= nuevoMensaje;
    document.getElementById('resultado').style.display = 'block';
} 

//llama al boton cifrar y luego ejecuta las funciones , oculta la primera pantalla y muestra el resultado cifrado
const botonCifrar = document.getElementById('btnCifrar');
botonCifrar.addEventListener('click', ocultarEntrada);
botonCifrar.addEventListener('click', capturarDatosA);

//llaman al boton descifrar y luego ejecuta las funciones, oculta la primera pantalla y muestra el resultado descifrado
const botonDescifrar = document.getElementById('btnDescifrar');
botonDescifrar.addEventListener('click', ocultarEntrada);
botonDescifrar.addEventListener('click', capturarDatosB);

//llama al boton Volver a intentar, oculta los resultados muestra la primera pantalla limpia los datos anteriores
const botonVolverIntentar = document.getElementById('btnVolverIntentar');
botonVolverIntentar.addEventListener('click', ocultarResultado);
botonVolverIntentar.addEventListener('click', mostrarEntrada);
botonVolverIntentar.addEventListener('click', limpiarEjercicio);