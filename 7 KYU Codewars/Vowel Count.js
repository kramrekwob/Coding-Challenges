function getCount(str) {
    //define vowels
    const vowels= ["a","i","e","o","u",]
    //initialize count
    let count=0
    //run through string space by space
    for (i=0; i<str.length;i++)
    if (vowels.includes(str[i])) count++
    return count;
  }