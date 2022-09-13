function high(sentence){
    //create an object with all the letter values
    let letterValues = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12,
      m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 }
    
    
    //split string into array of words, initialize highest count, initialize answer
    let arrayOfWords = sentence.split(' ');
    let currentHighest = 0;
    let answer = "";
    
    
    //loop over all words calculating a value, if value greater than current, reassign
    for (let i=0; i< arrayOfWords.length; i++){
      let counter= 0;
      for ( let j=0; j<arrayOfWords[i].length; j++ ) {
        counter += letterValues[arrayOfWords[i][j]];
        }
        if (counter>currentHighest) {
         currentHighest = counter;
         answer = arrayOfWords[i]
      }
    }
    return answer;
}