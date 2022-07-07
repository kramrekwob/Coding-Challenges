function convertToRoman(num) {
    //conversion key, answer, i
   const conversion = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  let answer= "";
  let i;
  //iterate through table, subtract value from num until 0
  for(i in(conversion)){
    while (num>=conversion[i]){
    answer +=i;
    num -=conversion[i];}
  }
  return answer;
  }
  
  convertToRoman(36);