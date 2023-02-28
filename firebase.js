
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
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

const db = getFirestore();

export function agregarEquipo(tipo, brand, serie) {
    addDoc(collection(db, 'Equipos'),{Tipo: tipo, Marca: brand, NSerie: serie});
};


