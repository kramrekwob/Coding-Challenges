function solution(start, finish) 
{ let bigJumps = Math.floor((finish - start)/3);
 let remainingJumps = (finish - start) - bigJumps * 3;
 console.log(bigJumps)
  return bigJumps + remainingJumps
}