/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    //remove white space, split by any amount of whitepsace
    s = s.trim().split(/(\s+)/);
    //access last word in array, return length
    return s[s.length-1].length
};