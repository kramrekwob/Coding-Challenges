/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    //split into individual letters
    pattern = pattern.split('');
    //split into words
    s = s.split(' ');
    //if lengths aren't the same, cant possibly be true;
    if (pattern.length != s.length) return false;
    let map = {};
    for (let i=0; i<s.length; i++) {
    //if this letter has already been assigned a word
    if (pattern[i] in map) {
        //if the letter corresponds to a different word false
        if (map[pattern[i]] != s[i]) return false;
    };
    map[pattern[i]] = s[i];
    }
  console.log(map)
    return true;
};