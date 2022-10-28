function nextBigger(n){
    //arr of digits
    let string = n.toString();
    let arrOfDigits = string.split('').map(x => Number(x));
    
    //traverse the digits from the end to the beginning  
    let pivot = -1;
    for (let i=arrOfDigits.length-1; i>0; i--){
    //find where theres a pivot point, a number bigger than the one to its left
      if ( arrOfDigits[i] > arrOfDigits[i-1] ) {
        pivot = i-1
        break;
        }
      }
    if (pivot=== -1) {return pivot};
    
    //cut off the rest of the digits,
      
    let restOfDigits = arrOfDigits.splice(pivot);
      
    let numberToReplace = restOfDigits.splice(0,1)[0];
        
    let temp = null;
    let index= null;
        for (let j=0; j<restOfDigits.length; j++){
          if (restOfDigits[j]>numberToReplace) {
            if (temp ===null || restOfDigits[j]<temp){
              temp = restOfDigits[j];
              index=j
            }
          };
    }
        
        restOfDigits.splice(index, 1);
        //add in the number to replace, sort them (lowest) 
        restOfDigits.push(numberToReplace);
        restOfDigits.sort().join('')
    // concatenate the left chunk, the smallest next digit, and then the sorted following digits
        let answer = arrOfDigits.join('') + temp + restOfDigits.join('')
        return Number(answer);
        
        }