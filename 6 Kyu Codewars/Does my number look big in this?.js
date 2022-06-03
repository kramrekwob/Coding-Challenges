function narcissistic(value) {
    let arrayOfDigits = value.toString().split('');
    let answer=0;
    for (let i = 0; i < arrayOfDigits.length; i++){
      answer+= arrayOfDigits[i] ** arrayOfDigits.length;
    }
    return (value == answer)
  }