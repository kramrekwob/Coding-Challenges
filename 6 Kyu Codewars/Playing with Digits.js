function digPow(n, p){
    let digitsArray= n.toString().split('');
    let sum=0;
    for (let i=0; i<digitsArray.length; i++){
      sum += Math.pow(digitsArray[i],p+i)
    }
    if (sum %n ===0) return (sum/n);
    return -1;
  }