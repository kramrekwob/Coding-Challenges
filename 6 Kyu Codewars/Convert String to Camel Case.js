function toCamelCase(str){
    let array= str.replace(/[_-]/g, " ").split(" ")
    let answerArray=[];
    for (let i=1; i<array.length; i++){
      answerArray.push(array[i].charAt[0].toUpperCase() + array[i].slice(1));
      }
    console.log(answerArray.join(""));
    return answerArray.join("");
    }