function cleanString(s) {
    let array = s.split('');
    let answer = []
    //iterate over
    for (let i=0; i<array.length; i++){
      if (array[i] == "#") answer.pop() 
      else answer.push(array[i])
    }
    return answer.join('')
  }