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
var wordChooser = terms[random]; // the word to guess will be chosen from the array above
var newWord = new Array(wordChooser.length); //ratewort= approx "evaluate word"
var error = 0; //fehler = error
console.log(wordChooser);
// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < newWord.length; i++) {
    newWord[i] = "_ ";
}
// prints the guessfield
function showNewWord() {
    for (var i = 0; i < newWord.length; i++) {
        var guessField = document.getElementById("guessfield");
        var letter = document.createTextNode(newWord[i]); //buchstabe = letter
        guessField.appendChild(letter); //ratefeld = guess field
    }
}
//checks if the the letter provided by the user matches one or more of the letters in the word
function checkCharacter() {
    var a = document.blank; //check .rateformular - what's it's function
    var b = a.elements["newcharacter"];
    var character = b.value; // the letter provided by the user
    character = character.toUpperCase();
    for (var i = 0; i < wordChooser.length; i++) {
        if (wordChooser[i] === character) {
            newWord[i] = character + " ";
            var goal = true;
        }
        character = "";
    }
    //deletes the guessfield and replaces it with the new one
    var guessField = document.getElementById("guessfield");
    guessField.innerHTML = "";
    showNewWord();
    // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
    if (!goal) {
        var guessedLetter = document.getElementById("guessedletter");
        var letter = document.createTextNode(" " + character);
        guessedLetter.appendChild(letter);
        error++;
        var hangman = document.getElementById("hangman");
        hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + error + ".png";
    }
    //checks if all letters have been found
    var end = true;
    for (var i = 0; i < newWord.length; i++) {
        if (newWord[i] === "_ ") {
            end = false; //fertig = finished/end
        }
    }
    if (end) {
        window.alert("You win!");
    }
    //once you got six wrong letters, you lose
    if (error === 6) {
        window.alert("You lose :( .");
    }
}

function init() {
    showNewWord();
}
window.onload = init;
