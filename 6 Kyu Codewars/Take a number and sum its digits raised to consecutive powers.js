function sumDigPow(a, b) {
    let answerArray = [];
    for (let i=a; i<b; i++){
      let temp = i.toString().split('').map((current,index) => (+current) **(index+1)).reduce((a,b)=>a+b)
      //
      if (temp == i) answerArray.push(i);
    }
    return answerArray
  }
  