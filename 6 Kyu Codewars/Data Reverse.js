function dataReverse(data) {
    let answerArray = [];
    while (data.length>0) {
      answerArray.push(...data.splice(-8, 8));
    }
    return answerArray;
  }