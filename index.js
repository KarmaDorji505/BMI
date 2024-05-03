function weightHeight() {
    let x = document.forms["myForm"]["kg"].value;
    let y = document.forms["myForm"]["m"].value;
    
    var BMI = Math.round(x / (y * y));
 

    if (BMI < 18.5 && BMI > 0) {
        result.innerHTML = ("Your BMI is " + BMI + ". You are underweight!" );
        document.getElementById("result").style.color = "red";
    }

    else if (BMI <= 24.9 && BMI >= 18.5) {
        result.innerHTML = ("Your BMI is " + BMI + ". You are in great shape." );
    }

    else if (BMI >= 25 && BMI <= 29.9) {
        result.innerHTML = ("Your BMI is " + BMI + ". You are over-weight!" );
    }

    else if (BMI >= 30 && BMI <= 34.9) {
        result.innerHTML = ("Your BMI is " + BMI + ". You are obese!!" );
    }

    else if (BMI < 35 && BMI > 0) {
        result.innerHTML = ("Your BMI is " + BMI + ". You are EXTEREMELY OBESE!!!" );
    }
    else {
        result.innerHTML = ("Please enter your weight and height" );
    }
}