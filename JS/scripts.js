var output = document.getElementById( 'output' );
var newGuess = document.querySelector( '[name="new-guess]' );
var chances = document.getElementById('chances');
var previousGuesses = document.getElementById('previousGuesses');


var form = document.querySelector( 'form' );
form.addEventListener('input', function ( event ) {
    event.preventDefault();
    output.innerHTML += newGuess.value;
});

var word =Array[String];

function getWord() {
        if(newGuess = word.length){
            alert("You win, Play againe?")
        }else{
          alert("You ran out of time, Play againe?")  
        }   function getLetter() {
        for (i = 0; i <= word.length; i++) {
         if (i>0 & i<word.length){
           console.log (chances.innerHTML.value);
         } else{
            console.log(previousGuesses.innerHTML.value);
         }
    