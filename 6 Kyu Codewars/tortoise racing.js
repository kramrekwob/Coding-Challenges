function race(v1, v2, g) {
    if (v1 >= v2) return null;
    let answer = [];
    let totalSeconds = g /(v2 - v1) * 3600;
    console.log(totalSeconds)
    let wholeHours = Math.floor(totalSeconds/3600);
    answer.push(wholeHours);
    let wholeMinutes = Math.floor((totalSeconds - wholeHours*3600)/60)
    answer.push(wholeMinutes)
    let remainingSeconds = Math.floor(totalSeconds - wholeHours*3600 - wholeMinutes*60)
    answer.push(remainingSeconds)
    return answer;
    
  }