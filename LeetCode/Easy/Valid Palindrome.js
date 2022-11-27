/**
 * @param {string} s
 * @return {boolean}
 */
//simplest solution
 var isPalindrome = function(s) {
    //sanitize input - lowercase, no non-alphanumerics
    s = s.toLowerCase().replace(/[^a-z\d]/gi, '')
    //reverse is expensive, compare to end
    return s.split('').reverse().join('') == s
};

// much faster solution is to check only HALF the string by comparing it to the end

var isPaldinrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z\d]/gi, '')
    let start = 0;
    let end = s.length-1; 
    
    while (start < end){
        
        if(s[start] !== s[end]) return false
        start++;
        end--;
    }
    return true

}