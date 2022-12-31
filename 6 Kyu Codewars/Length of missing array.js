function getLengthOfMissingArray(arrayOfArrays) {
    console.log(arrayOfArrays);
    //way too many edge cases, if no argument passed
    if (!arrayOfArrays) return 0;
    //any element null ,return 0
    if (arrayOfArrays.some(element => element == null)) return 0;
    //empty array
    if (arrayOfArrays.length == 0) return 0;
    arrayOfArrays.sort((a,b) => a.length - b.length);
   
    if (arrayOfArrays[0] == undefined || arrayOfArrays[0].length == 0 || arrayOfArrays[0] == null) return 0;
    let start = arrayOfArrays[0].length;
    for ( let i=0; i < arrayOfArrays.length; i++ ) {
      if ( arrayOfArrays[i].length != i+start) return i + start ;
    }
    return 0;
  }