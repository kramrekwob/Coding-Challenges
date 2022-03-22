function findOdd(arr) {
    //for each number of array(might be a faster way to do this)
    for (let i = 0; i < arr.length; i++) {
      //the count is the length of a filtered subarray of value of arr[i]
      const count = arr.filter(value => value === arr[i]).length;
      //if count is odd, this is answer
      if (count % 2 == 1) {
          return arr[i];
      }
  }
                       }