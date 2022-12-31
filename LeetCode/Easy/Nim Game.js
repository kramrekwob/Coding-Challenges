/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    //i can win any game <3 because I start
    if (n<3) return true;
    //for 4 theres no way to win
    if ( n==4 || n%4 == 0) return false;
    else return true;
};