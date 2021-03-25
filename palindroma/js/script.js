// Palindroma
// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

// chiediamo all'utente di inserire una parola
var username = prompt('Dimmi il tuo nome');
console.log(username);


document.getElementById('yourname').innerHTML = 'Il tuo nome è : ' + username;

palindrome(username);

// document.getElementById('palindrome').innerHTML = 'Il tuo nome è : ' + username;


// creiamo una funzione per capire se la parola inserita è palindroma
function palindrome(namePalindrome) {

    for( var i = 0; i < namePalindrome.length; i++) {

        var readingLeft = namePalindrome[i];
        console.log(readingLeft);

    }

    for( var j = namePalindrome.length - 1; j >= 0; j--) {

        var readingRight = namePalindrome[j];
        console.log(readingRight);
    }

    if(readingLeft === readingRight) {
        document.getElementById('palindrome').innerHTML = 'il tuo nome è palindromo';
    } else {
        document.getElementById('palindrome').innerHTML = 'il tuo nome non è palindromo';
    }

    return namePalindrome;
}

