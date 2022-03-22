function solution(number){
    if (number<0) return 0;
    let answer=0;
    for(let i=0; i<number; i++){
      if (i%3==0){
        answer += i;
      }
      else if(i%5==0){
  answer += i;}
    }
    return answer;
  }