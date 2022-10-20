var maxSequence = function(arr){
    // initialize absolute minimum, and a 0 max so far (because empty arrays are allowed)
    let maxSoFar=  Number.MIN_SAFE_INTEGER;
    let maxEndingHere= 0;
    //empty arrays return 0
    if (arr.length===0) return 0;
    // loop through arr 
    for (let i=0; i < arr.length; i++){
       maxEndingHere += arr[i];
      if (maxSoFar < maxEndingHere) {maxSoFar = maxEndingHere};
      
      if (maxEndingHere < 0) {maxEndingHere = 0};
    }
    //negative maximums return 0
    if (maxSoFar<0) return 0
    //return max
    return maxSoFar
  }