function squareOrSquareRoot(array) {
    function squareOrNot(number) {
      if (Number.isInteger( Math.sqrt(number ))) return Math.sqrt(number)
    else return number * number
    };  
    return array.map(x => squareOrNot(x))
  }