function persistence(num) {
    let count=0;
    
    num = num.toString();
   while (num.length>1) {
     count++;
    num = num.split('').map(Number).reduce((a,b)=>a*b).toString();
   }
  return count;
  }
  