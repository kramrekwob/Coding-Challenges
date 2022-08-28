function SeriesSum(n)
{ let answer = 0;
 for (let i=0; i<n; i++){
   answer += 1/(i*3 + 1)
 }
 return answer.toFixed(2);
}