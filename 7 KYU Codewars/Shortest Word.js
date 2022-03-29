function findShort(s){
    //separate into words using " "
    let arrayofStrings= s.split(' ');
    //initialize shortest word
      let shortestWord= arrayofStrings[0];
    //compare each word
    for (let i=0 ; i< arrayofStrings.length; i++)
      if (arrayofStrings[i].length < shortestWord.length){
        shortestWord= arrayofStrings[i];
      }
    return shortestWord.length
    }


/*
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
*/