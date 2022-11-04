function longestConsec(strarr, k) {
    //bad inputs
      if (strarr.length===0 || k>strarr.length || k<=0) return '';
    //empty answer 
      let longestSoFar = [0, ''];
      
      for (let i=0; i<=strarr.length - k; i++){
        let currentWord = strarr.slice(i,i+k).join('')
        if (currentWord.length > longestSoFar[0]){
          longestSoFar[0] = currentWord.length;
          longestSoFar[1] = currentWord;
        }
      }
      return longestSoFar[1]
    }