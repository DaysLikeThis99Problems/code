const startCountDown= () => {
    const timeInput=document.getElementById("timeInput").value;
    const timeDisplay=document.getElementById("timer");
    const timeRemaining=parseInt(timeInput);
    console.log(typeof timeRemaining);

    if(isNaN(timeRemaining) || timeRemaining <= 0){
        timeDisplay.textContent= "Please enter a valid number";
    }

    //clear the previous count down text
    timeDisplay.textContent= 'Time Left '+timeRemaining+' seconds';
    for(let i= timeRemaining; i>=0;i--){
        (function(count){
            setTimeout(()=>{
                if(count>0){
                    timeDisplay.textContent='Time Left: '+count+' seconds';
                }
                else{
                    timeDisplay.textContent="Time's up";
                }
            },(timeRemaining-count)*1000);
        })(i);
    }
};

document.getElementById("startBtn").addEventListener("click",startCountDown);