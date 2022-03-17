//regExp for 4 digits, or 6.  Use .test method 
function validatePIN (pin) {
    const regExp= /^(\d{4}|\d{6})$/
    return regExp.test(pin);
     }