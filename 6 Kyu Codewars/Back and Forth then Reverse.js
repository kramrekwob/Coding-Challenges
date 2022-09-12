function arrange(s) {

    let total=s.length;

    let pos= 1;
      
    let answer= [];
    
    for (let i=0; i < s.length/2 ; i++){
    if (pos>0){
    answer.push(s[i]);
    answer.push(s[total-1-i]);
    }
    if (pos<0){
    answer.push(s[total-i-1]);
    answer.push(s[i]);
    }
    pos *= -1;
    }
    if (s.length%2===1) answer.pop();
    return answer;
    }

//initial solution timed out for huge test cases
/*
function arrange(s) {
  // use slice to create a copy, initialize the answer
let copy = s.slice();
let answer= [];
for (let i=0; i < s.length/2; i++){
  if ( copy.length===1 ) {
  answer.push(copy[0]);
  break;
  }
  else
  answer.push(copy.shift(),copy.pop());
  copy.reverse();
}
  return answer;
}
*/