function findUniq(arr) {
    //if first 2 aren't the same it has to be one or the other
      if (arr[0] !== arr[1]) {
    if (arr[0]=== arr[2]){
      return arr[1]
    }
        else return arr[0];
    }
    //else need to return the first one we see that isn't the same as the previous
      for (let i=1; i<arr.length; i++){
        if ( arr[i]!== arr[i-1] )  return arr[i];
      }
    }
    /*There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

