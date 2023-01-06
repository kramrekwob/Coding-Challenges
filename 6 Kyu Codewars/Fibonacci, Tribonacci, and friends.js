function Xbonacci(signature,n){
    //Using the original length of the signature, continue adding to the result until 
    const originalLength=signature.length;
    //cant just make a shallow copy .slice(0) because of weird edge cases
    const result = signature.slice(0, n);
    while (result.length < n) {
      //tack on one additional number
      result[result.length] = result.slice(-originalLength).reduce((p,c) => p + c, 0);
    }
    return result;
  }