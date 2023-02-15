function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    
    const displayInputField = document.getElementById('display-pin');
    displayInputField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        //const typedNumberField = document.getElementById('typed-number');
        //const previousTypedNumber = typedNumberField.value;
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPin = document.getElementById('display-pin');
    const displayPinValue = displayPin.value;

    const typedNumber = document.getElementById('typed-number');
    const typeNumberValue = typedNumber.value;

    const pinSuccess = document.getElementById('pin-success');
    const pinFailure = document.getElementById('pin-failure');

    if(displayPinValue === typeNumberValue){
        //const pinSuccess = document.getElementById('pin-success');
        pinSuccess.style.display = 'block';
        pinFailure.style.display = 'none';
    }
    else{
        //const pinFailure = document.getElementById('pin-failure');
        pinFailure.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
})