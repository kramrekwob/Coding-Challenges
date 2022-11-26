var solution = function(firstArray, secondArray) {
    let answer = 0;
    for (let i=0; i<firstArray.length; i++)
      answer += (firstArray[i] - secondArray[i]) ** 2;
    return answer/firstArray.length
  }