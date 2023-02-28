import { agregarEquipo } from './firebase.js';

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('boton').addEventListener('click', () => {

        let tipo = document.getElementById('equipo').value;
        let marca = document.getElementById('marca').value;
        let serie = document.getElementById('serie').value;

        agregarEquipo(tipo, marca, serie);
        
    })





});