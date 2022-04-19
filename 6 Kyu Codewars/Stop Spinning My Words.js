function spinWords(string){
    //split into words
   let stringArray= string.split(' ');
  //initialize answer
    let answerArray= [];
  //loop through each word
  for(let i=0; i<stringArray.length; i++){
  if (stringArray[i].length>=5){
    let reversedWord= stringArray[i].split('').reverse().join('');
    answerArray.push(reversedWord);
  }
  else answerArray.push(stringArray[i]);
  }
    return answerArray.join(' ');
  }