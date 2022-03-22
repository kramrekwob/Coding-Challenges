function descendingOrder(n){
    let array= n.toString().split('');
    let word= array.sort((a,b)=>b-a).join('');
     return Number(word);
     
   }
   