function positiveSum(arr) {
    let answer= 0;
    for (i=0; i<arr.length; i++){
      if (arr[i]>0) {
        answer += arr[i];
      }
    }
    return answer;
  }