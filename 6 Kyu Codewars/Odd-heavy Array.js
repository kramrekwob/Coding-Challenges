function isOddHeavy(n){
    let highestEven=-Infinity;
    let lowestOdd=Infinity;
    for (let i=0; i<n.length; i++){
      // if it is even and higher than highest even, reassign highest even
      if ( n[i] % 2 == 0 && n[i] >highestEven) {
        highestEven=n[i];
      }
      if( n[i]%2 !== 0 && n[i]<lowestOdd)
        lowestOdd=n[i];
    }
    if (lowestOdd==Infinity) return false;
    console.log(highestEven, lowestOdd, n)
    return (highestEven<lowestOdd) 
  }