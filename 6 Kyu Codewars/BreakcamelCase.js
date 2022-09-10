// complete the function
function solution(string) {
    let strArray = string.split('');
    //iterate through everything but first letter
    for (let i=1; i<string.length; i++){
    //at uppercase reassign with a space
      if ( strArray[i] == strArray[i].toUpperCase() ){
      strArray[i] = " " + strArray[i];
    }
  }
    
    return strArray.join('');
  }
  