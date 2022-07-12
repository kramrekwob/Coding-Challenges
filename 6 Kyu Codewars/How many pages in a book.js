function amountOfPages(summary){
    let answer = summary;
    let result = 0;
    for (let i=1; answer>0; i++){
      if(i<10) answer -= 1;
      else if (i<100) answer-= 2;
      else if (i<1000) answer -=3;
      else if (i<10000) answer -=4;
      else if( i<100000) answer -=5;
      result = i;
    }
    return result;
  }