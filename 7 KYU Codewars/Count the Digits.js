function nbDig(n, d) {
    let answer = 0;
    for (let i=0; i<=n; i++){
      let temp = i**2;
      let digitArray = temp.toString().split('');
      for (let j=0; j<digitArray.length; j++){
        //loose equality because it is a string
        if (digitArray[j] == d) answer ++;
      }
    }
    return answer;
  }