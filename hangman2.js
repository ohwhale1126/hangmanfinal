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
var random = Math.floor((Math.random() * (terms.length - 1)));
var wordchooser = terms[random]; // the word to guess will be chosen from the array above
var newword = new Array(wordchooser.length); //ratewort= approx "evaluate word"
var error = 0; //fehler = error
// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < newword.length; i++) {
    newword[i] = "_ ";
}
// prints the guessfield
function shownewword() {
    for (var i = 0; i < newword.length; i++) {
        var guessfield = document.getElementById("guessfield");
        var letter = document.createTextNode(newword[i]); //buchstabe = letter
        guessfield.appendChild(letter); //ratefeld = guess field
    }
}
//checks if the the letter provided by the user matches one or more of the letters in the word
function checkcharacter() {
    var a = document.blank; //check .rateformular - what's it's function
    var b = a.elements["newcharacter"];
    var character = b.value; // the letter provided by the user ZEICHEN = character
    character = character.toUpperCase();
    for (var i = 0; i < wordchooser.length; i++) {
        if (wordchooser[i] === character) {
            newword[i] = character + " ";
            var goal = true;
        }
        character = "";
    }
    //deletes the guessfield and replaces it with the new one
    var guessfield = document.getElementById("guessfield");
    guessfield.innerHTML = "";
    shownewword();
    // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
    if (!goal) {
        var guessedletter = document.getElementById("guessedletter");
        var letter = document.createTextNode(" " + character);
        guessedletter.appendChild(letter);
        error++;
        var hangman = document.getElementById("hangman");
        hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + error + ".png";
    }
    //checks if all letters have been found
    var end = true;
    for (var i = 0; i < newword.length; i++) {
        if (newword[i] === "_ ") {
            end = false; //fertig = finished/end
        }
    }
    if (end) {
        window.alert("You win!");
    }
    //once you got six wrong letters, you lose
    if (error === 6) {
        window.alert("Uh...I guess you're dead now.");
    }
}

function init() {
    shownewword();
}
window.onload = init;
