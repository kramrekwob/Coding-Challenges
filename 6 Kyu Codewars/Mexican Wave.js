function wave(str){
    let answerArray=[];
    for (let i=0; i<str.length; i++){
    //skip spaces as 'empty seats'
    if (str[i]===" ") continue;
    //push modified words
    let newStr= str.substring(0, i) + str[i].toUpperCase() + str.substring(i+1);
      answerArray.push(newStr);
    }
    //return array
    return answerArray;
    }