function countOddPentaFib(n) {
    
  if (n===0) return 0;
  if (n<5) return 1;
  else return Math.floor((n - 1) / 6) + Math.floor((n - 2) / 6) + 1
  //can also use the double tilde
  }