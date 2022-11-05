function firstNonRepeatingLetter(s) {
    let lower = s.toLowerCase()
  for (let i=0; i < s.length; i++){
    let char = lower[i]
    //if it is first and last
    if (lower.indexOf(char)===i && lower.lastIndexOf(char)===i)
      return s[i];
  }
    return '';
  }