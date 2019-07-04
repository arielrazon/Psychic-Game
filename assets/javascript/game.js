//the letters to pick from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//what the computer picked
var computerLetterChoice = letters[Math.floor(Math.random() * letters.length)]
//wins counter
var wins = 0
//losses counter
var losses = 0
//guesses counter
var guesses = 10
//what the user has already guessed
var userGuessed = []
//last answer
var lastAnswer = []
//tells computer to listen for a keypress
document.onkeypress = function (event) {
    //creates a variable from the string equivelant of the pressed key
    var userGuess = event.key;



    if (userGuess === computerLetterChoice) {
        wins++;
        guesses = 10;

        lastAnswer.push(computerLetterChoice);
        document.getElementById("answerText").innerHTML = "Last Answer Was: " + lastAnswer
        computerLetterChoice = letters[Math.floor(Math.random() * letters.length)];
        userGuessed = [];
    }
    else {
        guesses--;
        userGuessed.push(String(" " + userGuess));
    }
    if (guesses === 0) {
        losses++;
        guesses = 10;

        lastAnswer = [];
        computerLetterChoice = letters[Math.floor(Math.random() * letters.length)];
        userGuessed = [];

    }

    document.getElementById("winsText").innerHTML = "Wins: " + wins;
    document.getElementById("loseText").innerHTML = "Losses:" + losses;
    document.getElementById("guessesLeftText").innerHTML = "Guesses left:" + guesses;
    document.getElementById("guessesMadeText").innerHTML = userGuessed


    console.log(guesses)
    console.log(wins)
    console.log(losses)
    console.log(computerLetterChoice)
    console.log(userGuessed)
    console.log(lastAnswer)
}