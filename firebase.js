
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc, setDoc, query, orderBy, limit, where } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrwWqdLZsBMw5LB4nh1NAt3xLvZqXRbC0",
    authDomain: "bios-calib.firebaseapp.com",
    projectId: "bios-calib",
    storageBucket: "bios-calib.appspot.com",
    messagingSenderId: "1049167679428",
    appId: "1:1049167679428:web:71640d6632252abd509e91",
    measurementId: "G-WH9PNTFF7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const equipRef = collection(db, 'Equipos');

export function agregarEquipo(calibNum, tipo, brand, serie) {
    // addDoc(collection(db, 'Equipos'),{Tipo: tipo, Marca: brand, NSerie: serie});
    addDoc(collection(db, "Equipos"), { Tipo: tipo, Marca: brand, NSerie: serie, RegCalib: calibNum }).then(
        (response) => { 
            console.log("escritura realizada");
            alert("Registro exitoso") 
            window.location.reload();
        });

   

};

export function editarEquipo(calibNum, tipo, brand, serie, id) {
    // addDoc(collection(db, 'Equipos'),{Tipo: tipo, Marca: brand, NSerie: serie});
    setDoc(doc(db, "Equipos", id), { Tipo: tipo, Marca: brand, NSerie: serie, RegCalib: calibNum }).then(
        (response) => { 
            console.log("escritura realizada");
            alert("Registro exitoso") 
            window.location.reload();
        });

   

};
/*./0
/*export function agregarEquipo(calibNum, tipo, brand, serie) {
    // addDoc(collection(db, 'Equipos'),{Tipo: tipo, Marca: brand, NSerie: serie});
    setDoc(doc(db, "Equipos", calibNum), { Tipo: tipo, Marca: brand, NSerie: serie, RegCalib: calibNum }).then(
        (response) => { 
            console.log("escritura realizada"); 
            location.reload();
        });

   

};
/*

/*
import { query, orderBy, limit } from "firebase/firestore";
*/
//const q = query(equipRef, orderBy("name"), limit(3));



//

export async function ultimoRegistro() {

    let registro = "";

    const querySnapshot = await getDocs(query(collection(db, 'Equipos'), orderBy("RegCalib", "desc"), limit(1)));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        console.log(doc.data().RegCalib);
        registro = doc.data().RegCalib;
        document.getElementById("certNumber").value = parseInt(registro) + 1 ;
    });


}


export async function  leerDoc(numero){

    /*
    

const q = query(collection(db, "cities"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

    */

    let info = "";
    let existe = "";
    let id = "";
    const q = query(collection(db, "Equipos"), where("RegCalib", "==", numero));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        info = doc.data();
        id = doc.id;
        existe = true;
    });

  
    if (existe === true ) {
       
        
        console.log("Document data:", info);
        
        let calibNum = info.RegCalib;
        let tipo = info.Tipo;
        let marca = info.Marca;
        let serie = info.NSerie;



        document.getElementById('readCertNumber').value = calibNum;
        document.getElementById('readEquipo').value = tipo;

        document.getElementById('readMarca').value = marca;
        document.getElementById('readSerie').value = serie;
       
        localStorage.setItem("id", id);
        localStorage.setItem("calibNum", calibNum);
        localStorage.setItem("tipo", tipo);
        localStorage.setItem("marca", marca);
        localStorage.setItem("serie", serie);
        


    } else {
        // doc.data() will be undefined in this case
       
        console.log("No such document!");
        
        document.getElementById('readCertNumber').value = "";
        document.getElementById('readEquipo').value = "";

        document.getElementById('readMarca').value = "";
        document.getElementById('readSerie').value = "";
        
    }
};