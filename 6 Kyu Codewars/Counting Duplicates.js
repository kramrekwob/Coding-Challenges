function duplicateCount(text){
    //convert to lowercase, split into characters, sort for easy matching, join to string
    //match all wildcard characters (.) of length 1 or greater \1+ global tag
    //return length of above expression, or length of empty array, 0.
  return (text.toLowerCase().split('').sort().join('').match(/(.)\1+/g)|| []).length
  }