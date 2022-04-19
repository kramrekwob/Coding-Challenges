function tribonacci(signature,n){
    //your code here
    let number1= signature[0];
    let number2= signature[1];
    let number3= signature[2];
    let answerArray= [number1, number2, number3];
  if (n===0) return [];
  if (n===1) return [number1];
  if (n===2) return [number1, number2];
    
  for(let i=3; i<n; i++){
    let nextNumber= number1+number2+number3;
    answerArray.push(nextNumber);
    number1= number2;
    number2= number3;
    number3= nextNumber;
  }
    return answerArray;
  }