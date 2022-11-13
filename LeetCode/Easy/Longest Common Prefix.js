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
  
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  let longest = 0;
  //check each letter is the same as all the others in the array
  for (let i=0; i<strs[0].length; i++){
      if (strs.every(word => word[i] === strs[0][i])) longest++
      else break;
  }
  //return the longest slice
  return strs[0].slice(0,longest)
};