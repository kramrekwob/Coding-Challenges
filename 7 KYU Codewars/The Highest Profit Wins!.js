function minMax(arr){
    //sort array minimum to maximum
    let sortedArr = arr.sort((a,b) => a-b);
    return [sortedArr[0], sortedArr[sortedArr.length-1]]; // fix me!
  }
  