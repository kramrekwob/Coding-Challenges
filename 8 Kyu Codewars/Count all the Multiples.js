function findMultiples(integer, limit) {
    let answerArray=[];
    for (let i=1; i<=limit; i++){
      if (i%integer===0){
        answerArray.push(i);
      }
    }
    return answerArray
  }
  