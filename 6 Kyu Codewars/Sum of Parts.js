
function partsSums(ls) {
  if (ls.length == 0) return [0];
 let answer = [];
  let sum1 = ls.reduce((acc,b) => acc + b);
  for (let i=0; i<=ls.length; i++){
    answer.push(sum1);
    sum1 -= ls[i];
  }
  return answer;
}