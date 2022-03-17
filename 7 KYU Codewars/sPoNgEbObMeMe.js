//turn whole thing lowercase, split into array, iterate thru 2nd turning to uppercase. join
function spongeMeme(sentence) {
    let lowerCaseArray = sentence.toLowerCase().split('');
   
    for ( i=0; i<lowerCaseArray.length; i+=2) {
       lowerCaseArray[i] = lowerCaseArray[i].toUpperCase();
      }
     return lowerCaseArray.join('');
  }