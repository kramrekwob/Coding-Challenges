var capitals = function (word) {
    //initialize the empty answer, an array to iterate through.
      let array = word.split("");
    let answer=[];
    for (let i=0; i<array.length; i++){
      let letter=array[i];
      if ( letter=== letter.toUpperCase() ) answer.push(i);
    };
    return answer;
  };