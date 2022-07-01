function solve(arr) {
    let answer=1;
  //arr of arrays params, return a number
    for (let i=0; i<arr.length; i++){
//iterate over each subArray creating a new Set to eliminate duplicates
      let number = new Set(arr[i])
//.LENGTH =/ .SIZE YA BIG DUMMY
      answer *= number.size;
      }
    return answer;
  };