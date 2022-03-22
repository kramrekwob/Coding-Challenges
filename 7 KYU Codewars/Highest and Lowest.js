function highAndLow(numbers){
    //seperate string into array
    let array= numbers.split(' ');
    //initialize least, most
    let least = array[0];
    let most = array[0];
    for (let i=0; i<array.length; i++){
    if (Number(array[i]) < least) {
      least= Number(array[i]);}
      else if (Number(array[i]) > most){
         most = Number(array[i]);
  }
    }
    return most + " " + least
  }