multiplicationTable = function(size) {
    let answer = [];
    for (let i=1; i<=size; i++){
      let row = [];
      for (let j=1; j<=size; j++){
        row.push(j*i)
        }
      
    answer.push(row)
    }
    return answer;
  }