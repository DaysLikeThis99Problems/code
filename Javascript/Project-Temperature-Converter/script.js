//!==========Temperature Converter========
//create a project that converts Celsius to
//Fahrenheit (or vice versa). Use if 
//statements to validate input (e.g., it 
//should be a number.)

document.getElementById("convertButton").addEventListener("click",function(){
    //get the value from temp input
    const temperature=document.getElementById("temperatureInput").value;
    //get the value from temp input
    const conversionType=document.getElementById("conversionType").value;
    //get the value from temp input
    const resultDiv=document.getElementById("result");

    //clear the previous in the result div
    resultDiv.innerHTML="";
    //Validate the user
    if(isNaN(temperature)){
        resultDiv.innerHTML="Please enter a valid number for the temperature";
        return;
    }
    //conversion logic
    let conversionTemperature;
    if(conversionType=="toCelsius"){
        conversionTemperature=(temperature-32)*(5/9);
        resultDiv.innerHTML=temperature+'°F is equal to '+ conversionTemperature.toFixed(2)+'°C';

    }
    else if(conversionType=='toFahrenheit'){
        conversionTemperature=temperature*(9/5)+32;
        resultDiv.innerHTML=temperature+'°C is equal to'+ conversionTemperature.toFixed(2)+'°F';
    }
});