function toWeirdCase(string){
    let array = string.trim().split(' ');
    function wordChange(word){
    let wordArray=word.split('')
    for (let i=0; i<wordArray.length; i++){
      if (i%2==0)wordArray[i] = wordArray[i].toUpperCase()
      if (i%2==1)wordArray[i] = wordArray[i].toLowerCase();
    }
    return wordArray.join('');
    }
    return array.map(x => wordChange(x)).join(' ');
  }