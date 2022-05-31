function longest(s1, s2) {
    let lettersArray= s1+s2.split('');
    
    let uniqueLetters= [...new Set(lettersArray)];
    let almostthere= uniqueLetters.sort().join('');
   return almostthere.slice(1)
    
}