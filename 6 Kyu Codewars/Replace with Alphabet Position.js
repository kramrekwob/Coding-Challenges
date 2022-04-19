function alphabetPosition(text) {
    let alphabet= "abcdefghijklmnopqrstuvwxyz";
     let numbers= [];
     text= text.toLowerCase();
   for (let i=0; i<text.length; i++){
     let index= alphabet.indexOf(text[i])
   if (index===-1) continue;
   numbers.push(index+1)
   }
     return numbers.join(' ');
   }