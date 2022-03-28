function sumStrings(a,b) { 
    if (a=='') return b;
    if (b=='') return a;
    var number1= BigInt(a);
    var number2= BigInt(b);
    
    let numAnswer= number1 + number2;
    return numAnswer.toString();
      
    }