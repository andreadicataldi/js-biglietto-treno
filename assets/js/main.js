// Richiesta all'utente di distanza da percorrere e età anagrafica
var distance = Number(prompt('Quanti chilometri vuoi percorrere?'));
var userAge = Number(prompt('Quanti anni hai?'));
// Costo per KM
var costPerKm = 0.21;
//Tariffa base
var standardCost = (distance * costPerKm);
var totalCost = 0;
// Sconto 20% per età inferiore a 18, sconto 40% per età superiore a 65
if (userAge < 18) {
    totalCost = standardCost - (standardCost * 0.2);
} else if (userAge > 65) {
    totalCost = standardCost - (standardCost * 0.4);
} else {
    totalCost = standardCost;
}

document.getElementById('ticketCost').innerHTML = totalCost + " €";