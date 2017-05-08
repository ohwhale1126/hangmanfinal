var terms = [
["F", "U", "N", "C", "T", "I", "O", "N"]
  , ["V", "A", "R", "I", "A", "B", "L", "E"]
  , ["S", "T", "R", "I", "N", "G"]
  , ["N", "U", "M", "B", "E", "R"]
  , ["B", "O", "O", "L", "E", "A", "N"]
  , ["Q", "U", "N", "I", "T"]
  , ["C", "S", "S"]
  , ["H", "T", "M", "L"]
  , ["G", "I", "T", "H", "U", "B"]
  , ["J", "A", "V", "A", "S", "C", "R", "I", "P", "T"]
  , ["B", "O", "O", "T", "S", "T", "R", "A", "P"]

]
var random = Math.floor((Math.random() * (lsgwoerter.length - 1)));
<<<<<<< HEAD
var chosenWord= lsgwoerter[random]; // the word to guess will be chosen from the array above
var ratewort = new Array(chosenWord.length);//ratewort= approx "evaluate word"
var error = 0;//fehler = error
=======
var lsgwort = lsgwoerter[random]; // the word to guess will be chosen from the array above
var ratewort = new Array(lsgwort.length); //ratewort= approx "evaluate word"
var fehler = 0; //fehler = error
>>>>>>> origin/master
// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < ratewort.length; i++) {
    ratewort[i] = "_ ";
}
// prints the guessfield
function showWord() {
    for (var i = 0; i < ratewort.length; i++) {
        var ratefeld = document.getElementById("ratefeld");
        var buchstabe = document.createTextNode(ratewort[i]); //buchstabe = letter
        ratefeld.appendChild(buchstabe); //ratefeld = rate field
    }
}
//checks if the the letter provided by the user matches one or more of the letters in the word
var pruefeZeichen = function () {
    var f = document.rateformular;
    var b = f.elements["ratezeichen"];
    var zeichen = b.value; // the letter provided by the user ZEICHEN = character
    zeichen = zeichen.toUpperCase();
    for (var i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === zeichen) {
            ratewort[i] = zeichen + " ";
            var treffer = true;
        }
        b.value = "";
    }
    //deletes the guessfield and replaces it with the new one
    var ratefeld = document.getElementById("ratefeld");
    ratefeld.innerHTML = "";
    printRatewort();
    // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
    if (!treffer) {
        var gerateneBuchstaben = document.getElementById("gerateneBuchstaben");
        var buchstabe = document.createTextNode(" " + zeichen);
        gerateneBuchstaben.appendChild(buchstabe);
        error++;
        var hangman = document.getElementById("hangman");
        hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + error + ".png";
    }
    //checks if all letters have been found
    var fertig = true;
    for (var i = 0; i < ratewort.length; i++) {
        if (ratewort[i] === "_ ") {
            fertig = false; //fertig = finished
        }
    }
    if (fertig) {
        window.alert("You win!");
    }
    //once you got six wrong letters, you lose
    if (error === 6) {
        window.alert("Uh...I guess you're dead now.");
    }
}

function init() {
    printRatewort();
}
window.onload = init;
