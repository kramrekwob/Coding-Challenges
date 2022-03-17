//Take number, convert to string so that you can split it into an array
function squareDigits(num){
    const digits = num.toString().split('')
//Square each individual place in array
    const squaredDigits = digits.map(n => n * n)
//join array, return as number
    const answer = squaredDigits.join('')
    
    return +answer;
  }