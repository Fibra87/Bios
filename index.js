//importo funciones de firebase.js para usar
import { agregarEquipo, leerDoc, ultimoRegistro} from './firebase.js';

function guardarCalibracion(){

    let calibNum = parseInt(document.getElementById('certNumber').value);
    let tipo = document.getElementById('equipo').value;
    console.log(tipo);
    let marca = document.getElementById('marca').value;
    let serie = document.getElementById('serie').value;

    agregarEquipo(calibNum, tipo, marca, serie);
    
}

function leerDatosCert(){
    
    let calibNum = parseInt(document.getElementById('buscaReadCertNumber').value);
    if (calibNum != "") {
       leerDoc(calibNum);
    }

};

ultimoRegistro();

document.getElementById('boton').addEventListener('click', () => {

    guardarCalibracion();

});


document.getElementById('buscaReadCertNumber').addEventListener('change', () => {





    leerDatosCert();

});

