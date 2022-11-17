function incrementString (string) {
    //if end is not number, concatenate a 1 to end of string
     if (!string.match(/\d+$/)){
       return string + '1';
     }
    let word = string.split(/\d+$/)[0]
    console.log(word, string)
    //if end of string is a number, turn into number, increment, and turn back into string.
    let endNumber = string.match(/\d+$/);
    console.log(endNumber)
    let zeroes = endNumber[0].length
    console.log(endNumber.length)
    // the new ending is the old number + 1, and the beginning of the string is padded with leading 0s
    let newEnd = (+endNumber + 1).toString().padStart(zeroes, '0');
    //add the word piece to the number piece
    let finalWord = word.concat(newEnd);
    return finalWord;
    }