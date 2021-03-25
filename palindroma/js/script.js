// Palindroma
// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

// chiediamo all'utente di inserire una parola
var username = prompt('Dimmi il tuo nome');
console.log(username);


document.getElementById('yourname').innerHTML = 'Il tuo nome è : ' + username;

var risultato = directionName(username);

palindrome(risultato);

// creiamo una funzione per capire se la parola inserita è palindroma
function directionName(namePalindrome) {

    var readingLeft;
    for( var i = 0; i < namePalindrome.length; i++) {

        readingLeft = namePalindrome[i];
        console.log(readingLeft);

    }

    var readingRight;
    for( var j = namePalindrome.length - 1; j >= 0; j--) {

        readingRight = namePalindrome[j];
        console.log(readingRight);
    }
    
    var isPalindroma = false;
    if(readingLeft === readingRight) {
        isPalindroma = true;
    }

    return isPalindroma;
}


function palindrome(result) {

    if(result === true) {
        document.getElementById('palindrome').innerHTML = 'il tuo nome è palindromo';
    } else {
        document.getElementById('palindrome').innerHTML = 'il tuo nome non è palindromo';
    }

}