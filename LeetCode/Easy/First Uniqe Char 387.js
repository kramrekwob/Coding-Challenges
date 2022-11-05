/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    for (let i=0; i < s.length; i++){
      let char = s[i]
      //if it is first and last
      if (s.indexOf(char)===i && s.lastIndexOf(char)===i)
        return i;
    }
      return -1;
    }