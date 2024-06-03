const display = document.getElementById("display");



function appendToDisplay(input){
 display.value+= input;  
}

function clearDisplay(){
  display.value ="";
}

function handleButtonclick(value) {
            if (value === 'c') {
                clearDisplay();
            } else if (value === '=') {
                calculate();
            } else if (value === '^2') {
                appendToDisplay('**2');
            } else if (value === '^3') {
                appendToDisplay('**3')
            } else if (value === '√') {
                appendToDisplay('**0.5');
            } else {
                appendToDisplay(value);
            }
        }

function calculate(){

    try {
    display.value = eval(display.value);

    }
    catch (error){
     display.value="kijana focus!"
     alert('error')
    }
}






