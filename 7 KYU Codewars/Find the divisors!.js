function divisors(integer) {
    let answerArray = [];
    for (let i=2; i < integer; i++){
      if (integer%i === 0) {answerArray.push(i);}
    }
    if (answerArray.length===0) return integer + ' is prime';
    return answerArray;
  };