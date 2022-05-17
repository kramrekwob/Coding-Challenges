var runLengthEncoding = function(str){
    //split entire string into individual letters
    let letterArray=str.split('');
    let answerArray=[];
    let currentLetter;
    let incrementer=1;
    for (let i=0; i<letterArray.length;i++){
      //check if it continues a series of identical letters
      if (letterArray[i]===currentLetter){
        incrementer++;
        //if so then check if it ends the series, if so push array to answer, reset incrementer
        if (letterArray[i+1] !==letterArray[i]){
          answerArray.push([incrementer, currentLetter]); 
          incrementer=1;
        }}
      //check if its the beginning of a series of identical letters
      else if (letterArray[i]===letterArray[i+1]){
        currentLetter=letterArray[i];
      }
      //otherwise it is a single letter, push 1 and string
      else {answerArray.push([1,letterArray[i]]);
            currentLetter=letterArray[i]}
    }
    return answerArray;
  }