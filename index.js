//importo funciones de firebase.js para usar
import { agregarEquipo, leerDoc, ultimoRegistro, editarEquipo} from './firebase.js';

function guardarCalibracion(){



    let calibNum = parseInt(document.getElementById('certNumber').value);
    let tipo = document.getElementById('equipo').value;
    console.log(tipo);
    let marca = document.getElementById('marca').value;
    let serie = document.getElementById('serie').value;
    let id = localStorage.getItem("id");
    let localStorageCalibNum = localStorage.getItem("calibNum");

    if (calibNum === parseInt(localStorageCalibNum)) {

        editarEquipo(calibNum, tipo, marca, serie, id);
        
    } else {
        
        agregarEquipo(calibNum, tipo, marca, serie);
    }

  
    
}

function leerDatosCert(){
    
    let calibNum = parseInt(document.getElementById('buscaReadCertNumber').value);
    if (calibNum != "") {
       leerDoc(calibNum);
    }

};

function editarDatos(){

    if (document.getElementById('readCertNumber').value != "") {

        console.log("edita");

       
        let calibNum = localStorage.getItem("calibNum");
        let tipo = localStorage.getItem("tipo");
        let marca = localStorage.getItem("marca");
        let serie = localStorage.getItem("serie");



    document.getElementById('certNumber').value = calibNum;
    document.getElementById('equipo').value = tipo;
    document.getElementById('marca').value = marca;
    document.getElementById('serie').value = serie;

    window.scrollTo(0,0);

    }

}


ultimoRegistro();

document.getElementById('boton').addEventListener('click', () => {

    guardarCalibracion();

});

document.getElementById('editarbtn').addEventListener('click', () => {

    
  editarDatos();

});

document.getElementById('buscaReadCertNumber').addEventListener('change', () => {





    leerDatosCert();

});

document.getElementById('pdfbtn').addEventListener('click', () => {

    
   window.location = "PDF.html";
  
  });
