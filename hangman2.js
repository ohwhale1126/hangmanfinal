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
    // Gets a random term
var random = Math.floor((Math.random() * (terms.length - 1)));
// Chooses a word from the term array
var wordChooser = terms[random];
var newWord = new Array(wordChooser.length);
var error = 0;
console.log(wordChooser);
// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < newWord.length; i++) {
    newWord[i] = "_ ";
}
/**
 * This is a function for dividing two numbers
 * @author Marty McFly
 * @param {number} x    This is the numerator
 * @param {number} y    This is the denominator
 * @return {number} Returns the result
 */
function showNewWord() {
    for (var i = 0; i < newWord.length; i++) {
        var guessField = document.getElementById("guessField");
        var letter = document.createTextNode(newWord[i]);
        guessField.appendChild(letter);
    }
}
//checks if the the letter provided by the user matches one or more of the letters in the word
/**
 * [checks if the the letter provided by the user matches one or more of the letters in the word]
 * @author Gemma
 */
function checkCharacter() {
    var a = document.blank; //check .rateformular - what's it's function
    var b = a.elements["newCharacter"];
    var character = b.value; // the letter provided by the user
    character = character.toUpperCase();
    for (var i = 0; i < wordChooser.length; i++) {
        if (wordChooser[i] === character) {
            newWord[i] = character + " ";
            var goal = true;
        }
        b.value = "";
    }
    //deletes the guessfield and replaces it with the new one
    var guessField = document.getElementById("guessField");
    guessField.innerHTML = "";
    showNewWord();
    // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
    if (!goal) {
        var guessedLetter = document.getElementById("guessedLetter");
        var letter = document.createTextNode(" " + character);
        guessedLetter.appendChild(letter);
        error++;
        var hangman = document.getElementById("hangman");
        hangman.src = "hangmanpics/hangman" + error + ".png";
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
    if (error === 10) {
        window.alert("You lose :( .");
    }
}

/**
 * [[calls showNewWord function]]
 * @author Gemma
 */
function init() {
    showNewWord();
}
window.onload = init;
