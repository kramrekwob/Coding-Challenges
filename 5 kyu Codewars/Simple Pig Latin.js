function pigIt(str){
    //split sentence into words
    let strArray= str.split(' ');
    //empty Array for solved words
    let pigLatinArray= [];
    for (let word of strArray) {
      //regex because of punctuation
      if ((/([a-zA-z])/).test(word)) {
          pigLatinArray.push(word.substring(1) + word[0] + 'ay')
          }
      else pigLatinArray.push(word)
  }
   //there are clever regEx solutions involved /w character, hard to read
    return pigLatinArray.join(' ')    
    }
   