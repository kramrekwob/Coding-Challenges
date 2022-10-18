function nthSmallest(arr, pos){
    //sort() is JUST STRINGS sort by a,b 
    let sortedArray= arr.sort((a,b) => a-b)
    return sortedArray[pos-1];
  }
  