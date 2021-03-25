// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//  Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.

// facciamo scegliere all'utente pari o dispari
var choicePariDispari = prompt('Pari o Dispari?');
console.log(choicePariDispari);

// facciamo inserire all'utente un numero da 1 a 5
var numberSelect = parseInt( prompt('Scegli un numero da 1 a 5') );
console.log('Il tuo numero è : ' , numberSelect);

// generiamo un numero random da 1 a 5 per il computer usando una funzione
function numberRandom(computerNumber) {

    var numberComputer = Math.floor(Math.random() * 5) + 1;
    console.log('Il numero del tuo avversario è : ', numberComputer);

    return numberComputer;
}

var computer;
numberRandom(computer);
console.log(computer);

// sommiamo i due numeri 


// stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)

// dichiariamo chi ha vinto