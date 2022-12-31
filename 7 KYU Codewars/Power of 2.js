function isPowerOfTwo(n){
    let input = n
    if (n==1) return true;
   while (input >= 2) {
     input = input/2;
     if (input==1) return true;
   }
    return false;
  }