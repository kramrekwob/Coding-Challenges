function fakeBin(x){
    // split string into characters, map through array turning strings to numbers
    let array= x.split('').map( x => Number(x));
    //iterate overy array and re assign values to 0 or 1
    for (let i=0; i<array.length; i++){
      if (array[i]>4) array[i]=1;
      else array[i]=0;
    }
    // join and return
      return array.join('')
    }