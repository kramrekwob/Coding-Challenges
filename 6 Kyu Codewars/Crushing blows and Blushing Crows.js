function spoonerise(str){
    let words = str.split(' ')
    //regex for consonants
    let cons = /^[^aeiou]*/i ;
    //bad input
    if ( words.length > 3 || words.length == 1 ){
      return 'No spoons here';
    }
    //2 words
    if ( words.length == 2 ) {
      //grab the matches
      let temp1 = words[0].match(cons)
      let temp2 = words[1].match(cons)
      
      words[0] = words[0].replace(cons, temp2)
      words[1] = words[1].replace(cons, temp1)
    }
    //3 words
    if ( words.length == 3 ) {
      let temp1 = words[0].match(cons)
      let temp2 = words[2].match(cons)
      
      words[0] = words[0].replace(cons, temp2)
      words[2] = words[2].replace(cons, temp1)
    }
    return words.join(' ')
  }