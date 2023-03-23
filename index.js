//importo funciones de firebase.js para usar
import { agregarEquipo, contadorCalibraciones, leerDoc } from './firebase.js';

function guardarCalibracion(){

    let calibNum = document.getElementById('certNumber').value;
    let tipo = document.getElementById('equipo').value;
    console.log(tipo);
    let marca = document.getElementById('marca').value;
    let serie = document.getElementById('serie').value;

    agregarEquipo(calibNum, tipo, marca, serie);
    alert("registro exitoso");
    location.reload();
}

function indiceCertificado(){
    let contadorRegistro = contadorCalibraciones() + 1
    console.log(contadorRegistro);

    document.getElementById("certNumber").value = contadorRegistro; 

}

function leealgo(){
    console.log("anda");
}

function leerDatosCert(){
    
    leerDoc(obtenerCertNum());

};

function obtenerCertNum(){

    let calibNum = document.getElementById('certNumber').value;
    console.log(calibNum);

    return calibNum;
}

indiceCertificado();


document.getElementById('certNumber').addEventListener('change', () => {

    leerDatosCert();

});
