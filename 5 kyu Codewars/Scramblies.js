function scramble(str1, str2) {
    let letters = {};
    //count all frequences in str1;
    for (let i=0; i<str1.length; i++){
      if (letters.hasOwnProperty(str1[i])) letters[str1[i]] +=1;
      else letters[str1[i]] = 1;
    }
    console.log(letters)
    console.log(letters['w'])
   for (let i=0; i<str2.length; i++){
     
     if (letters.hasOwnProperty(str2[i]) == false || letters[str2[i]] <=0) return false;
     if (letters.hasOwnProperty(str2[i])) letters[str2[i]] -= 1;
   }
    return true;
  }