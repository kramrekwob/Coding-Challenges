function eqSumPowdig(hMax, exp) {

    let ans = [];
     
     for (let i=2; i<=hMax; i++){
       //array of digits raised to the exp power
       let arr = i.toString().split('').map(x => x ** exp)
       //if the number equals this op, push
       if (i == arr.reduce((acc,b) => acc + b)) ans.push(i)
     }
     return ans;
   }