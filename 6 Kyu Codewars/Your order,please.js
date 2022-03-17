//had to learn sort method for this
function order(words){
    //split words into array
    let wordsArray= words.split(' ');
    //sort array by examining with RegEx expression for a digit, using that as index
    wordsArray.sort(function(a,b){return a.match(/\d/) - b.match(/\d/)})
    return wordsArray.join(' ')                 
    //join array into string and return
  }