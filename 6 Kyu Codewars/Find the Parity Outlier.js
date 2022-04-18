function findOutlier(integers){
    //figure out odds or evens
    let oddCount=0;
    let evenCount=0;
    let answer=0;
  if (integers[0]%2===0) {evenCount+=1;}
    else {oddCount +=1;}
  if (integers[1]%2===0) {evenCount+=1;}
    else {oddCount +=1;}
  if (integers[2]%2===0) {evenCount+=1;}
    else {oddCount +=1;}
//if we're looking for odds, must also catch negative numbers
  if (evenCount>oddCount){
  for (let i=0; i<=integers.length; i++){
    if (integers[i]%2===1||integers[i]%2===-1) {return integers[i]};
  }
  }
  else if (oddCount>evenCount){
  for (let i=0; i<=integers.length; i++){
   if (integers[i]%2===0) {return integers[i]};
  }
  }
  return answer;
  }