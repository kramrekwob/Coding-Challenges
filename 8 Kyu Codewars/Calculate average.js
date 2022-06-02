function findAverage(array) {
    let total=0;
    if (array.length==0) return 0;
    for (let i=0; i < array.length; i++){
      total += array[i];
    }
    return total/array.length;
  }