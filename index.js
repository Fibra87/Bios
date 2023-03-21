//importo funciones de firebase.js para usar
import { agregarEquipo, contadorCalibraciones } from './firebase.js';

console.log('inicio');

document.getElementById('boton').addEventListener('click', () => {

    let tipo = document.getElementById('equipo').value;
    console.log(tipo);
    let marca = document.getElementById('marca').value;
    let serie = document.getElementById('serie').value;

    agregarEquipo(tipo, marca, serie);
    console.log("registro exitoso");

});


let contadorRegistro = contadorCalibraciones() + 1
//console.log(contadorRegistro);

document.getElementById("certNumber").value = contadorRegistro; 

console.log('fin');

