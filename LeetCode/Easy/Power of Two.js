/**
 *  @param {number} n
 * @return {boolean}
 */
 // recursive way, 0 and odds immediate false, else  divide by 2 
var isPowerOfTwo = function(n) {
    if (n<=0) return false;
    if (n==1) return true;
    if (n%2 != 0) return false;
    return isPowerOfTwo(n/2)
};

//really fast bitwise way that usese bitwise & operator to compare
// trick is that the number 1 less will be all 1's, 10000 and 01111 end up as 0 
let isPowerOfTwo = n => n > 0 ? !(n & n-1) : false;