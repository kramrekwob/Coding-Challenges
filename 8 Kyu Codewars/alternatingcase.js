String.prototype.toAlternatingCase = function() {
    //split spring into array
    let textArray= this.split('')
    //iterate through each character in array and test upper or lowercase
    for (i=0; i<textArray.length; i++){
      
    //if uppercase switch to lowercase if lowercase switch to lowercase
    if (textArray[i]===textArray[i].toUpperCase()){
      textArray[i]=textArray[i].toLowerCase();}
    else textArray[i]=textArray[i].toUpperCase()
    }
    //join array and 
    return textArray.join('');
  }