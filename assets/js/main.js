// Richiesta all'utente di distanza da percorrere e età anagrafica
var distance = Number(prompt('Quanti chilometri disti dalla scuola di magia di Hogwarts?'));
if (isNaN(distance))
    alert("Devi inserire un numero");
var userAge = Number(prompt('Quanti anni hai, piccolo mago?'));
if (isNaN(userAge))
    alert("Devi inserire un numero");
// Costo per KM
var costPerKm = 0.21;
//Tariffa base
var standardCost = (distance * costPerKm);
var totalCost;
// Sconto 20% per età inferiore a 18, sconto 40% per età superiore a 65
if (userAge < 18) {
    totalCost = (standardCost * 0.8);
} else if (userAge > 65) {
    totalCost = (standardCost * 0.6);
} else {
    totalCost = standardCost;
}

if (userAge < 18) {
    document.getElementById('reduction').innerHTML = ("Sconto del 20% applicato alla tariffa base del Ministero della Magia*");
}

if (userAge > 65) {
    document.getElementById('reduction').innerHTML = ("Sconto del 40% applicato alla tariffa base del Ministero della Magia*");
}

document.getElementById('ticketCost').innerHTML = totalCost.toFixed(2) + " £";