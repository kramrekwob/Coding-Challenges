function isPangram(string){
    //...define alphabet for necessary comparison
    let alphabet= "abcdefghijklmnopqrstuvwxyz".split('');
    // transform string into lowercase for comparison
    let lowerCaseString= string.toLowerCase();
    return alphabet.every( x=> lowerCaseString.includes(x))
  }