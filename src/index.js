import cipher from './cipher.js';

console.log(cipher);

console.log('hola')

let alfabeto =["A","B","C","D","E"];


const numero = document.getElementById('saltos').value;
console.log(numero);
//const parrafo = document.getElementById('saludo');
//parrafo.innerHTML= name;

const imprimirAlf= document.getElementById('alfabeto');


imprimirAlf.innerHTML= alfabeto[1];	

for(var i = 0; i < alfabeto.length; i++){
  console.log("x");
}


document.getElementById('resultado').style.display = 'none';
// se cambió a funcion arrow const square = num => num * num;
const ocultar = () => {
    document.getElementById('entrada').style.display = 'none';
    document.getElementById('botones').style.display = 'none';
    }

const mostrar = () => {
    document.getElementById('entrada').style.display = 'block';
    document.getElementById('botones').style.display = 'block';
    }

const mostrarRESULTADO = () => {
    document.getElementById('resultado').style.display = 'block';
    //captura elementos del HTML
    let mensajeOriginal = document.getElementById('entrada').value;
    console.log(mensajeOriginal);
    //captura elementos del HTML
    let desplazamientos = document.getElementById('saltos').value;
    console.log(desplazamientos);
    }    
    
const ocultarRESULTADO = () => {
    document.getElementById('resultado').style.display = 'none';
    }

const botonCifrar = document.getElementById('btnCifrar');
botonCifrar.addEventListener('click', ocultar);
botonCifrar.addEventListener('click', mostrarRESULTADO);

const botonDescifrar = document.getElementById('btnDescifrar');
botonDescifrar.addEventListener('click', ocultar);
botonDescifrar.addEventListener('click', mostrarRESULTADO);



const botonVolverIntentar = document.getElementById('btnVolverIntentar');
botonVolverIntentar.addEventListener('click', mostrar);
botonVolverIntentar.addEventListener('click', ocultarRESULTADO);



//para revisar



let saltos = desplazamientos;
let alfaSinCifrar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let alfaCifrado =[];


for (var i = saltos, j = 0; i < alfaSinCifrar.length; i+=1) {
  //console.log("En el índice del array principal '" + i + "' hay este valor: " + alfaSinCifrar[i]);
  let dato = alfaSinCifrar[i];
  //console.log(dato);
  alfaCifrado.push(dato);
  //console.log("En el índice del array secundario '" + j + "' hay este valor: " + alfaCifrado[j]);
  
}

for (var i = 0; i < saltos; i+=1) {
  //console.log("En el índice del array principal '" + i + "' hay este valor: " + alfaSinCifrar[i]);
  let dato = alfaSinCifrar[i];
  //console.log(dato);
  alfaCifrado.push(dato);
  //console.log("En el índice del array secundario '" + j + "' hay este valor: " + alfaCifrado[j]);
  
}

alfaCifrado.forEach(function (valor) {
  document.write(valor + ' ');
  });

//alfaSinCifrar.forEach(function (valor) {
//document.write(valor + ' ');
//});  


let mensaje = mensajeOriginal;
let strMensaje = mensaje.split('');
let nuevoMensaje =[];

  

  for(let i = 0; i < strMensaje.length; i+=1){
    let letra = strMensaje[i];
    //console.log("debe ser la C" );
    //console.log(letra);
    let indice = alfaSinCifrar.indexOf(letra);
    //console.log("debe ser la ubicación 2" );
    //console.log(indice);
    let nuevo = alfaCifrado[indice];
    //console.log("lo q reemplaza a C" );
    //console.log(nuevo);
    nuevoMensaje.push(nuevo)
  }

  let strNuevoMensaje = nuevoMensaje.join('');