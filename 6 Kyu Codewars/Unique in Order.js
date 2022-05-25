var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    
    let answerArray=[];
    for (let i=0; i<iterable.length; i++){
      if (iterable[i+1] !== iterable[i]){
        answerArray.push(iterable[i]);
      }
    }return answerArray;
  }