function dontGiveMeFive(start, end)
{ let ans = [];
 for (let i=start; i<=end; i++){
 if ( i.toString().split('').every(item => item !== '5') )ans.push(i)
 }
  return ans.length;
}