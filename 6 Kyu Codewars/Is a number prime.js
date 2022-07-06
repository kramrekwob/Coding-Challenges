
function isPrime(num) {
    //eliminate negatives, 0, 1
    if (num <=1) return false;
    //eliminate evens other than 2
    if (num%2==0 && num>2) return false;
    //run loop from 3 to sqrt for other factors
    const sqrt = Math.sqrt(num);
    //loop thru all possible integers
    for ( let i=3; i <= sqrt; i++){
      if (num%i==0) return false;
    }
    return true;
  }
  