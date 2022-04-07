function palindrome(str) {
    //replace non word characters with Regex, also underscore counts as punctuation
    let simple = str.replace(/\W|_/g, "").toLowerCase();
//iterate through, make sure each character matches one on opposite side
   for (let i=0; i<simple.length; i++){
     if (simple[i] !==simple[simple.length-1-i])
     return false;
   }
   return true;
   }