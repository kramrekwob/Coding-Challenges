function count (string) {  
    let answer= {}
    //split string into array of characters, iterate over in forEach loop (no duplicates)
    
    string.split('').forEach(character => {
      //object [letter] is assigned either 1 if it doesnt exist yet, or is increased
      answer[character] = answer[character] ? (answer[character]+1) : 1
    })
       return answer;
    }