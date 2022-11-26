function solution (roman) {
    // values 
    let romanKeys = {M:1000, 
                 D:500,
                 C:100,
                 L:50,
                 X:10,
                 V:5,
                 I:1 }
    let answer = 0;
    let array = roman.split('');
    for (let i=0; i < array.length; i++){
      //if value is less than the next value, it is subtractive
      if (romanKeys[array[i]] < romanKeys[array[i+1]]) {
        answer += romanKeys[array[i+1]] - romanKeys[array[i]];
        //skip next one
        i++
      }
      else answer += romanKeys[array[i]]
      console.log(answer)
    }