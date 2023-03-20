//importo funciones de firebase.js para usar
import { agregarEquipo, contadorCalibraciones } from './firebase.js';


//funcionalidad para agregar datos a la coleccion.
document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('boton').addEventListener('click', () => {


        let numCal = document.getElementById('certNumber').value;
        let tipo = document.getElementById('equipo').value;
        let marca = document.getElementById('marca').value;
        let serie = document.getElementById('serie').value;

        agregarEquipo(numCal, tipo, marca, serie);
        
    });
});

//let contadorRegistro = contadorCalibraciones() + 1
//console.log(contadorRegistro);

//document.getElementById("certNumber").value = contadorRegistro; 


