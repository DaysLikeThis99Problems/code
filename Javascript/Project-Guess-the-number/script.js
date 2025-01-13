const randomNumber=Math.floor(Math.random()*10)+1;
const feedback=document.getElementById("feedback");
let userGuess;

//add event
document.getElementById("guessBtn").addEventListener("click",function () {
    //get the value from the input
    userGuess=parseInt(document.getElementById("guessInput").value);
    
    //check the guess
    guessCheck();
});

//check guess function
function guessCheck() {
    while(userGuess !== randomNumber){
        if (userGuess<randomNumber) {
            //update the ui
            feedback.textContent="Too low!, Try again";
        }
        else if(userGuess>randomNumber){
            feedback.textContent="Too high!, Try again";
        }
        return;
    }
    feedback.textContent="Bravo!, you guessed the correct number";
}