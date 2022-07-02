function evenNumbers(array, number) {
    let evens = array.filter(x => x%2 ===0);
    return evens.slice(-number)
  }