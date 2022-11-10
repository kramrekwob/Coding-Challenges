function expandedForm(num) {
    let digitArray = num.toString().split('')
    let answerArray = [];
    for (let i=0; i<digitArray.length; i++){
      if (digitArray[i]!== '0') 
        answerArray.push(digitArray[i].padEnd(digitArray.length-i, '0'))
    }
    return answerArray.join(' + ')
  }