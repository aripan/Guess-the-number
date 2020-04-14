// Variable to store the correct number
let computerGuess;

// Variable to store guess history
let userGuessLog = [];

// Variable to store number of attempts
let attempt = 0;

// Variable to store the number of total allowed guesses
let maxGuesses = 10;

/* Initializing the game with generating a random number */
function init(){
    computerGuess = Math.floor (Math.random() * 100 + 1);  // Generated random number
    // console.log(computerGuess);
    document.getElementById("newGameBtn").style.display = "none";  // Hiding the new game button
}

/* Function to execute the game */
function compareGuess(){
    let userGuess = " " + document.getElementById("inputNumber").value; // User's input
    // console.log(userGuess);

    attempt++;
    document.getElementById("attempts").innerHTML = attempt;    // Total number of attempts
    

    userGuessLog.push(userGuess);
    // console.log(userGuessLog);
    document.getElementById("guessLog").innerHTML = userGuessLog;  // History of user's guesses

    if (userGuessLog.length < maxGuesses){
        if (userGuess > computerGuess){
            document.getElementById("textOutput").innerHTML = "Your Guess is too high";
            document.getElementById("inputNumber").value = "";
        } else if (userGuess < computerGuess){
            document.getElementById("textOutput").innerHTML = "Your Guess is too low";
            document.getElementById("inputNumber").value = "";
        } else {
            document.getElementById("textOutput").innerHTML = "AWESOME, you have made it in " + attempt + " attempts";
            document.getElementById("textOutput").style.color = "#006400";
            document.getElementById("textOutput").style.fontFamily = "Acme";
            document.getElementById("container").style.backgroundColor = "#006400";
            // document.getElementById("inputNumber").value = "";
            gameEnded();
        }
    } else {
        if (userGuess > computerGuess){
            document.getElementById("textOutput").innerHTML = "YOU HAVE LOST" + "<br>The correct number was " + computerGuess;
            document.getElementById("textOutput").style.color = "#8B0000";
            document.getElementById("textOutput").style.fontFamily = "Acme";
            document.getElementById("container").style.backgroundColor = "#8B0000";
            gameEnded();

            /* Below codes are not necessary, but still these are the other ways to do the work. */
            // document.getElementById("inputNumber").value = "";
            // document.getElementById("guessLog").innerHTML = "";
            // window.location.reload();

        } else if (userGuess < computerGuess){
            document.getElementById("textOutput").innerHTML = "YOU HAVE LOST" + "<br>The correct number was " + computerGuess;
            document.getElementById("textOutput").style.color = "#8B0000";
            document.getElementById("textOutput").style.fontFamily = "Acme";
            document.getElementById("container").style.backgroundColor = "#8B0000";
            gameEnded();

            /* Below codes are not necessary, but still these are the other ways to do the work. */
            // document.getElementById("inputNumber").value = "";
            // document.getElementById("guessLog").innerHTML = "";
            // window.location.reload();

        } else {
            document.getElementById("textOutput").innerHTML = "AWESOME, you have made it in " + attempt + " attempts";
            document.getElementById("textOutput").style.color = "#006400";
            document.getElementById("textOutput").style.fontFamily = "Acme";
            document.getElementById("container").style.backgroundColor = "#006400";
            gameEnded();

            /* Below codes are not necessary, but still these are the other ways to do the work. */
            // document.getElementById("inputNumber").value = "";
            // document.getElementById("guessLog").innerHTML = "";
            // window.location.reload();
        }
    }
}

/* Function which is applied to restart the game */
function gameEnded (){
    document.getElementById("newGameBtn").style.display = "inline";             // Shows the New Game button
    document.getElementById("easyBtn").style.display = "none";                  // Hides the other buttons
    document.getElementById("mediumBtn").style.display = "none";                // Hides the other buttons
    document.getElementById("hardBtn").style.display = "none";                  // Hides the other buttons
    document.getElementById("inputNumber").setAttribute("readonly","readonly"); // Make the input box inaccessible 
}

function newGame(){
    window.location.reload();       // reload the window to resatrt the game
}

/* Selecting diiferent difficulty levels for the game */
function easyMode (){
    maxGuesses = 10;
    document.getElementById("easyBtn").style.backgroundColor = "#080"; // Changing the color of the button
    document.getElementById("mediumBtn").style.backgroundColor = "";   // Making other buttons inactive by not giving any background colors
    document.getElementById("hardBtn").style.backgroundColor = "";     // Making other buttons inactive by not giving any background colors
    
    /* Well the below codes were written to introduce the class through JS, but it was not needed. */  
    // document.getElementById("easyBtn").className = "activeBtn";  
    // document.getElementById("mediumBtn").className = "";
    // document.getElementById("hardBtn").className = "";
}

function mediumMode (){
    maxGuesses = 6;
    document.getElementById("easyBtn").style.backgroundColor = "";
    document.getElementById("mediumBtn").style.backgroundColor = "#080";
    document.getElementById("hardBtn").style.backgroundColor = "";
    
    //  document.getElementById("easyBtn").className = "";
    // document.getElementById("mediumBtn").className = "activBtn";
    // document.getElementById("hardBtn").className = "";
}

function hardMode (){
    maxGuesses = 3;
    document.getElementById("easyBtn").style.backgroundColor = "";
    document.getElementById("mediumBtn").style.backgroundColor = "";
    document.getElementById("hardBtn").style.backgroundColor = "#080";
    
    // document.getElementById("easyBtn").className = "";
    // document.getElementById("mediumBtn").className = "";
    // document.getElementById("hardBtn").className = "activeBtn";
}
                