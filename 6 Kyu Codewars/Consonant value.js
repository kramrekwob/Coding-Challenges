function solve(s) {
    //values
    let values = {
      A:1,
      B:2,
      C:3,
      D:4,
      E:5,
      F:6,
      G:7,
      H:8,
      I: 9,
      J: 10,
      K: 11,
      L: 12,
      M: 13,
      N: 14,
      O: 15,
      P: 16,
      Q: 17,
      R: 18,
      S: 19,
      T: 20,
      U: 21,
      V: 22,
      W: 23,
      X: 24,
      Y: 25,
      Z: 26
    };
    //array on consonant substrings
    let consonants = s.toUpperCase().split(/[AEIOU]+/);
    console.log(consonants)
    let max=0;
    for (let num = 0; num<consonants.length; num++ ){
      //individual value
      let ind = consonants[num].split('').reduce((acc,b)=> acc + values[b], 0)
      if (ind > max) max = ind;
    }
    return max;
  };