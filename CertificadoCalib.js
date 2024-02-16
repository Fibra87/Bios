let marca = localStorage.getItem("marca");
let serie = localStorage.getItem("serie");
let calibNum =localStorage.getItem("calibNum");
let equipo = localStorage.getItem("tipo");

console.log(calibNum);

document.getElementById("data_Equipo").innerHTML = equipo ;
document.getElementById("data_Marca").innerHTML = marca ;
document.getElementById("data_Serie").innerHTML = serie ;
document.getElementById("data_CalibNum").innerHTML = calibNum ;