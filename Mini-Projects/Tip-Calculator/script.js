//Calc tip function
function calculateTip(){
    const billAmount=parseFloat(document.getElementById("bill").value);
    const serviceQuality=parseFloat(document.getElementById("service").value);
    const numberOfPeople=parseFloat(document.getElementById("people").value);

    //validations
    if(!isFinite(billAmount) || billAmount <=0){
        alert("Please enter a valid bill amount");
        return;
    }
    if(!isFinite(numberOfPeople) || numberOfPeople <=0){
        alert("Please enter a least 1 person");
        return;
    }
    //calculate the values
    const tipAmount=billAmount*serviceQuality;
    const totalAmount=billAmount+tipAmount;
    const perPerson=totalAmount/numberOfPeople;
    const tipPerPerson=tipAmount/numberOfPeople;
    //display results with 2 decimal places
    document.getElementById("tipAmount").textContent='$'+tipAmount.toFixed(2);
    document.getElementById("totalAmount").textContent='$'+totalAmount.toFixed(2);
    document.getElementById("perPerson").textContent='$'+perPerson.toFixed(2);
    document.getElementById("tipPerPerson").textContent='$'+tipPerPerson.toFixed(2);


    // document.querySelectorAll("input","select").forEach((element)=>{
    //     element.addEventListener('input',calculateTip);
    // })
    
    document.getElementById("calculateBtn").addEventListener("click",calculateTip);
}

//add event listener
document.getElementById("calculateBtn").addEventListener("click",calculateTip);

//calculate base on input change
// document.querySelectorAll("input","select").forEach((element)=>{
//     element.addEventListener('input',calculateTip);
// })
document.getElementById("bill").addEventListener('input',calculateTip);
document.getElementById("service").addEventListener('input',calculateTip);
document.getElementById("people").addEventListener('input',calculateTip);