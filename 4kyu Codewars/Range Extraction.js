function solution(list){
    //Sort through the list once 
    let answer = [];
    for (let i=0; i<list.length; i++){
      // if the next number is 1 ahead and last is one behind, it is mid range skip
      if (list[i-1] == list[i] - 1 && list[i+1] == list[i] + 1){
        continue;
      }
      //if its the start of a range add it and a -
      if (list[i+2]==list[i]+2 && list[i+1]==list[i]+1){
        answer.push(list[i].toString() + '-');
        continue;
      }
      //if its the end of a range add the end to the last item in the array
      if (list[i-1] == list[i]-1 && list[i-2] == list[i]-2){
        answer[answer.length-1] += list[i].toString();
        continue;
      }
      //otherwise it is a stand alone digit and it is added solo
      else answer.push(list[i].toString());
    }
     return answer.join(',');
  }