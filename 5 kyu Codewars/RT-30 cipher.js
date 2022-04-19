function rot13(message){
    let alphabet="abcdefghijklmnopqrstuvwxyzabcdefghijklm";
    let array= message.toLowerCase().split('');
    let answer= [];
    let notLetter= /[^a-zA-Z]/;
  for (let i=0; i<array.length; i++){
    if (notLetter.test(array[i])) {
    answer.push(array[i]);
        }
    else{
    let index= alphabet.indexOf(array[i])
    let letterToPush= (alphabet.charAt(index+13))
    if (message.charAt(i)===message.charAt(i).toUpperCase()) {
      letterToPush= letterToPush.toUpperCase();
    }
    answer.push(letterToPush)
  }
  }
    return answer.join('');
  }