function isOddHeavy(n){
    let odds = [];
    let evens = [];
    n.forEach(num=>num%2===0? evens.push(num) : odds.push(num));
    if(odds.length>0){
      return Math.min(...odds)>=Math.max(...evens)
    }return false
  }