/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    //first string in its entirety
    let firstString = strs[0];
    for (let i=0; i<strs.length; i++){
        let nextStringArray = []
        for (let j=0; j<strs[i].length; j++){
            if (strs[i][j] == firstString.charAt(j)) nextStringArray.push(strs[i][j])
            else break;
        }
        firstString = nextStringArray.join('')
    }
    return firstString;
};

//much easier using sort and comparing first and last indexs
var longestCommonPrefix = function(strs) {
    strs.sort();
    for (let i = 0; i < strs[0].length; i++) {
      if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
    }
    return strs[0];
  };