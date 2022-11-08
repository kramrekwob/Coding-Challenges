function removeSmallest(numbers) {
    let indexToDelete = numbers.indexOf(Math.min(...numbers));
    return numbers.slice(0,indexToDelete).concat(numbers.slice(indexToDelete+1))
  }